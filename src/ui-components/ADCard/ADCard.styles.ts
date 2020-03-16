import adColors from "../../constants/adColors";
import theme from "../../modules/theme";

export default () => ({
    root: {
        backgroundColor: adColors.white,
        minHeight: theme.spacing(30),
        padding: theme.spacing(2),
        width: '100%',
        '&:hover': {
            boxShadow: '0 3px 3px 3px rgba(0,0,0,0.15)',
            transition: 'box-shadow 0.3s ease-in-out',
        }
    },
    cardLinks: {
        marginTop: theme.spacing(10),
        '& > *': {
            borderBottom: `1px solid ${adColors.bgGray}`
        },
    },
});
