import { useCallback, useRef, useState } from 'react';

import { Styles } from './Select.styles';

import { compass } from 'assets/stickers';

import { IndicatorIcons } from './components/IndicatorIcons';
import { Input } from 'ui/components/Input';
import { Menu } from 'ui/components/Menu';
import { Sticker } from 'ui/components/Sticker';
import { Value } from './components/Value';

import type { FocusedOption, SelectedOption, SelectProps } from './@types/Select.types';
import type { FormEvent, KeyboardEvent, SyntheticEvent } from 'react';
import type { MouseOrTouchEvent } from 'ui/components/Menu';

type OptionIndex = typeof OPTION_INDEX[keyof typeof OPTION_INDEX];

const isArrayWithLength = <T,>(value: T): boolean => Array.isArray(value) && !!value.length;

const IS_TOUCH_DEVICE = !!window?.ontouchstart || !!navigator?.maxTouchPoints;
const OPTION_INDEX = { UP: 0, DOWN: 1, LAST: 2, FIRST: 3 } as const;

export const Select = ({ getOptionLabel, getOptionValue, onOptionChange, options = [], status }: SelectProps) => {
  const [isDisabled, isInvalid, isLoading] = [status === 'disabled', status === 'error', status === 'pending'];

  const [focusedOption, setFocusedOption] = useState<FocusedOption>({ index: -1 });
  const [inputValue, setInputValue] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<SelectedOption | null>(null);

  const controlRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  //   const listRef = useRef<FixedSizeList | null>(null);
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

  const handleOnKeyDown = (event: KeyboardEvent<HTMLElement>) => {};

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

  return (
    <Styles.SelectWrapper aria-expanded={isMenuOpen} onKeyDown={handleOnKeyDown}>
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
          onBlur={handleOnInputBlur}
          onChange={handleOnInputChange}
          onFocus={handleOnInputFocus}
          placeholder="Select option.."
          readOnly={isDisabled || isLoading}
          ref={inputRef}
          required={!Boolean(selectedOption)}
          status={status}
          value={inputValue}
        />
      </Styles.ValueWrapper>

      <Menu isOpen={isMenuOpen} options={options} />
    </Styles.SelectWrapper>
  );
};
