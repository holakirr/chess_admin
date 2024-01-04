import { createBoard } from '@wixc3/react-board';
import Dashboard from '../../../../app/page';

export default createBoard({
    name: 'Dashboard',
    Board: () => <Dashboard />,
    isSnippet: true,
});
