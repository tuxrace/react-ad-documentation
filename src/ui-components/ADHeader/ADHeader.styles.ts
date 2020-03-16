import { Theme } from '@material-ui/core';
import bg from '../../../src/assets/title_banner_v2.jpg'

export default (theme: Theme) => ({
    root: {
        height: `${theme.spacing(14)}px`,
        backgroundColor: theme.palette.primary.main,
        backgroundImage: `url(${bg})`,
    },
    title: {
        width: '1140px',
        margin: `${theme.spacing(5)}px  auto`,
        padding: theme.spacing(0, 2),
        color: theme.palette.primary.contrastText,
    }
});

