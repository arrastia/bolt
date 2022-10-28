import { render, unmountComponentAtNode } from 'react-dom';
import { Sheet } from 'ui/components/Sheet';

describe('Sheet render testing', () => {
  it('renders nicely', () => {
    const node = document.createElement('div');
    const renderSheet = () => (
      <Sheet header="Content here..." isOpen onClose={() => {}}>
        Content
      </Sheet>
    );

    render(renderSheet(), node);
    unmountComponentAtNode(node);
  });
});
