import NextLink from 'next/link';
import { useRouter } from 'next/router';
// import PropTypes from "prop-types";
import { Box, Button, ListItem, Divider } from '@mui/material';

export const NavItem = (props) => {
    const { href, icon, title, ...others } = props;
    const router = useRouter();
    const active = href ? router.pathname === href : false;

    return (
        <ListItem
            disableGutters
            sx={{
                display: 'flex',
                mb: 0.5,
                py: 0,
                px: 2,
            }}
            {...others}
        >
            <NextLink href={href} passHref>
                <Button
                    component="a"
                    startIcon={icon}
                    disableRipple
                    sx={{
                        backgroundColor: active && 'rgba(255,255,255, 0.08)',
                        borderRadius: 1,
                        color: active ? 'secondary.main' : 'neutral.300',
                        fontWeight: active && 'fontWeightBold',
                        justifyContent: 'flex-start',
                        px: 3,
                        textAlign: 'left',
                        textTransform: 'none',
                        width: '100%',
                        '& .MuiButton-startIcon': {
                            color: active ? 'secondary.main' : 'neutral.400',
                        },
                        '&:hover': {
                            backgroundColor: 'rgba(255,255,255, 0.08)',
                        },
                    }}
                >
                    <Box sx={{ flexGrow: 1 }}>
                        {/* {title === "Dashboard" && "센터"}
            {title === "Experience" && "체험권관리"}
            {title === "Centerreview" && "센터 후기관리"}
            {title === "Trainer" && "트레이너"}
            {title === "Trainerreview" && "트레이너 후기관리"}
            {title === "TopBanner" && "상단 배너 관리"}
            {title === "MiddleBanner" && "중간 배너 관리"}
            {title === "Vod" && "VOD 관리"}
            {title === "Member" && "회원 관리"}
            {title === "Login" && "로그인"}
            {title === "Error" && "에러페이지"} */}
                        {title}
                    </Box>
                </Button>
            </NextLink>
        </ListItem>
    );
};

// NavItem.propTypes = {
//   href: PropTypes.string,
//   icon: PropTypes.node,
//   title: PropTypes.string,
// };
