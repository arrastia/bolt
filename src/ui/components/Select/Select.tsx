import { useCallback, useMemo, useRef, useState } from 'react';

import { Styles } from './Select.styles';

import { compass } from 'assets/stickers';

import { IndicatorIcons } from './components/IndicatorIcons';
import { Input } from 'ui/components/Input';
import { Menu, MenuOption, MenuProps } from 'ui/components/Menu';
import { Sticker } from 'ui/components/Sticker';
import { Value } from './components/Value';

import type { FocusedOption, OptionLabelCallback, SelectedOption, SelectProps } from './@types/Select.types';
import type { FormEvent, KeyboardEvent, SyntheticEvent } from 'react';
import type { MouseOrTouchEvent } from 'ui/components/Menu';

type OptionIndex = typeof OPTION_INDEX[keyof typeof OPTION_INDEX];

const isArrayWithLength = <T,>(value: T): boolean => Array.isArray(value) && !!value.length;

const IS_TOUCH_DEVICE = !!window?.ontouchstart || !!navigator?.maxTouchPoints;
const OPTION_INDEX = { UP: 0, DOWN: 1, LAST: 2, FIRST: 3 } as const;

export const Select = ({ getOptionLabel, getOptionValue, onOptionChange, options = [], status }: SelectProps) => {
  const [isDisabled, isInvalid, isLoading] = [status === 'disabled', status === 'error', status === 'pending'];

  const getOptionLabelFn = useMemo<OptionLabelCallback>(() => getOptionLabel || (({ label }) => label), [getOptionLabel]);

  const [focusedOption, setFocusedOption] = useState<FocusedOption>({ index: -1 });
  const [inputValue, setInputValue] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<SelectedOption | null>(null);

  console.log('selectedOption :>> ', selectedOption);

  const controlRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  //   const listRef = useRef<FixedSizeList | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const menuOpenRef = useRef<boolean>(false);
  const prevMenuOptionsLength = useRef<number>();

  const blurInput = () => inputRef.current?.blur();
  const focusInput = () => inputRef.current?.focus();
  //   const scrollToItemIndex = (index: number) => listRef.current?.scrollToItem(index);

  const openMenuAndFocusOption = useCallback(
    (position: OptionIndex) => {
      if (!isArrayWithLength(options)) {
        setIsMenuOpen(true);
        return;
      }

      const selectedIndex = options.findIndex(({ status }) => status === 'selected');
      const index = selectedIndex > -1 ? selectedIndex : position === OPTION_INDEX.FIRST ? 0 : options.length - 1;

      //   scrollToItemIndex(index);
      setIsMenuOpen(true);
      setFocusedOption({ index, ...options[index] });
    },
    [options]
  );

  const handleOnMouseDownEvent = useCallback((event: SyntheticEvent<Element>) => {
    event.preventDefault();
    event.stopPropagation();

    focusInput();
  }, []);

  const handleOnCaretMouseDown = useCallback(
    (event: MouseOrTouchEvent<HTMLElement>) => {
      handleOnMouseDownEvent(event);
      menuOpenRef.current ? setIsMenuOpen(false) : openMenuAndFocusOption(OPTION_INDEX.FIRST);
    },
    [handleOnMouseDownEvent, openMenuAndFocusOption]
  );

  const handleOnClearMouseDown = useCallback(
    (event: MouseOrTouchEvent<HTMLElement>) => {
      handleOnMouseDownEvent(event);
      setSelectedOption(null);
    },
    [handleOnMouseDownEvent]
  );

  const handleSpaceBar = () => {
    if (inputValue) return;

    if (!isMenuOpen) {
      openMenuAndFocusOption(OPTION_INDEX.FIRST);
    } else if (!focusedOption.data) {
      return;
    } else {
      selectOptionFromFocused();
    }
  };

  const handleOnKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (isDisabled) return;

    const { key, shiftKey } = event;

    switch (key) {
      case 'ArrowDown':
        isMenuOpen ? focusOptionOnArrowKey(OPTION_INDEX.DOWN) : openMenuAndFocusOption(OPTION_INDEX.FIRST);
        break;

      case 'ArrowUp':
        isMenuOpen ? focusOptionOnArrowKey(OPTION_INDEX.UP) : openMenuAndFocusOption(OPTION_INDEX.LAST);
        break;

      case 'ArrowLeft':
      case 'ArrowRight':
        if (inputValue) return;
        break;

      case ' ':
        handleSpaceBar();
        break;

      case 'Enter':
        if (isMenuOpen) {
          selectOptionFromFocused();
        }
        break;

      case 'Escape':
        if (isMenuOpen) {
          setIsMenuOpen(false);
          setInputValue('');
        }
        break;

      case 'Tab':
        if (!isMenuOpen || !focusedOption.data || shiftKey) return;

        selectOptionFromFocused();
        break;

      case 'Delete':
      case 'Backspace':
        if (inputValue) return;

        if (!Boolean(selectedOption)) break;

        setSelectedOption(null);

        break;

      default:
        break;
    }
  };

  const handleOnInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsMenuOpen(false);
    setInputValue('');
  }, []);

  const handleOnInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleOnInputChange = useCallback(({ currentTarget: { value } }: FormEvent<HTMLInputElement>) => {
    setInputValue(value);
    setIsMenuOpen(true);
  }, []);

  const handleSelect = useCallback(
    (option: MenuOption) => {
      setSelectedOption({ data: option });
      onOptionChange?.(option);

      if (IS_TOUCH_DEVICE) {
        blurInput();
      } else {
        setInputValue('');
        setIsMenuOpen(false);
      }
    },
    [onOptionChange]
  );

  const handleOnControlMouseDown = (event: MouseOrTouchEvent<HTMLElement>) => {
    if (isDisabled) return;
    if (!isFocused) focusInput();

    const isNotInput = (event.target as HTMLElement).nodeName !== 'INPUT';

    if (isNotInput) {
      setIsMenuOpen(false);
      setInputValue('');
    }

    if (isNotInput) event.preventDefault();
  };

  const getIndex = (direction: OptionIndex) => {
    if (direction === OPTION_INDEX.DOWN) return (focusedOption.index + 1) % options.length;

    return focusedOption.index > 0 ? focusedOption.index - 1 : options.length - 1;
  };

  const focusOptionOnArrowKey = (direction: OptionIndex) => {
    if (!isArrayWithLength(options)) return;

    const index = getIndex(direction);

    // scrollToItemIndex(index);
    setFocusedOption({ index, ...options[index] });
  };

  const selectOptionFromFocused = () => {
    const { data } = focusedOption;

    if (data) handleSelect(data);
  };

  return (
    <Styles.SelectWrapper aria-expanded={isMenuOpen} onKeyDown={handleOnKeyDown} ref={menuRef}>
      <Styles.ValueWrapper
        // isFocused={isFocused}
        // isInvalid={isInvalid}
        onMouseDown={handleOnControlMouseDown}
        onTouchEnd={handleOnControlMouseDown}
        ref={controlRef}
        // status={status}
      >
        {/* <Value inputValue={inputValue} renderOptionLabel={() => null} selectedOption={selectedOption} /> */}
        <Input
          action={
            <IndicatorIcons
              isLoading={isLoading}
              isMenuOpen={isMenuOpen}
              onCaretMouseDown={!isDisabled ? handleOnCaretMouseDown : undefined}
              onClearMouseDown={handleOnClearMouseDown}
              showClear={!!(!isDisabled && Boolean(selectedOption))}
            />
          }
          icon={<Sticker data={compass} size={35} />}
          // onBlur={handleOnInputBlur}
          onChange={handleOnInputChange}
          onFocus={handleOnInputFocus}
          placeholder="Select option.."
          readOnly={isDisabled || isLoading}
          ref={inputRef}
          required={!Boolean(selectedOption)}
          status={status}
          value={inputValue ? inputValue : selectedOption?.data?.label || ''}
        />
      </Styles.ValueWrapper>

      <Menu appendTo={menuRef} isOpen={isMenuOpen} onSelect={handleSelect} options={options} />
    </Styles.SelectWrapper>
  );
};
