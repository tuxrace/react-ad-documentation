import { Theme } from '@material-ui/core';
import adColors from '../../constants/adColors';

export default (theme: Theme) => ({
    root: {
        backgroundColor: adColors.bgGray,
        height: '100%',
        color: adColors.fontGray,
    },
    content: {
        width: '1140px',
        margin: `${theme.spacing(1)}px  auto`,
        padding: theme.spacing(0, 2),
        backgroundColor: adColors.bgGray,
    }
});
