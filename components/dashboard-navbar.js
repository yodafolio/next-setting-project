import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
// import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { AppBar, Avatar, Box, IconButton, Stack, Paper, Toolbar, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { UserCircle as UserCircleIcon } from '../icons/user-circle';
// import { useSelector, useDispatch } from 'react-redux';
// import { LOG_OUT_ADMIN_USER_REQUEST, LOG_OUT_ADMIN_DONE_STATE } from '../reducers/adminUser';
// import { PREV_PAGE_REQUEST } from '../reducers/path';
// import { makeStyles } from '@material-ui/core';
// import { deleteCookie } from '../utils/cookies';

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
}));

const Item = styled(Paper)(() => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    cursor: 'pointer',
}));

// const useStyles = makeStyles(() => ({
//     rowStyle: {
//         '& span.MuiTypography-root MuiTypography-caption makeStyles-rowStyle-20 css-hiblv5-MuiTypography-root': {
//             marginLeft: '15px',
//         },
//     },
// }));

export const DashboardNavbar = (props) => {
    // const dispatch = useDispatch();
    const { onSidebarOpen, ...other } = props;
    const router = useRouter();
    // const { me, LogOutAdminDone } = useSelector((state) => state.adminUser);

    // const classes = useStyles();

    const onUserInfo = useCallback(() => {
        // dispatch({ type: PREV_PAGE_REQUEST, data: router.asPath });
        router.push('/adminProfile');
    }, [router]);

    // useEffect(() => {
    //     if (LogOutAdminDone) {
    //         alert('로그아웃 하였습니다.');
    //         dispatch({ type: LOG_OUT_ADMIN_DONE_STATE });
    //         router.push('/login');
    //     }
    // }, [LogOutAdminDone]);

    const onLogOut = useCallback(() => {
        console.log('logout');
        // dispatch({
        //     type: LOG_OUT_ADMIN_USER_REQUEST,
        // });
    }, []);

    return (
        <>
            <DashboardNavbarRoot
                sx={{
                    left: {
                        lg: 280,
                    },
                    width: {
                        lg: 'calc(100% - 280px)',
                    },
                }}
                {...other}
            >
                <Toolbar
                    disableGutters
                    sx={{
                        minHeight: 64,
                        left: 0,
                        px: 2,
                    }}
                >
                    <IconButton
                        onClick={onSidebarOpen}
                        sx={{
                            display: {
                                xs: 'inline-flex',
                                lg: 'none',
                            },
                        }}
                    >
                        <MenuIcon fontSize="small" />
                    </IconButton>
                    <Box sx={{ flexGrow: 1 }} />
                    <Button
                        onClick={onLogOut}
                        // variant='outlined'
                        size="small"
                        variant="outlined"
                    >
                        로그아웃
                    </Button>
                    <Stack>
                        <Item onClick={onUserInfo}>
                            <Typography variant="caption" mr={2} ml={3}>
                                {/* {me && me.name ? me.name : '이름 설정 하기'} */}
                            </Typography>
                            <Avatar
                                sx={{
                                    height: 40,
                                    width: 40,
                                    ml: 1,
                                }}
                                src="/static/images/avatars/avatar_1.png"
                            >
                                <UserCircleIcon fontSize="small" />
                            </Avatar>
                        </Item>
                    </Stack>
                </Toolbar>
            </DashboardNavbarRoot>
        </>
    );
};

// DashboardNavbar.propTypes = {
//     onSidebarOpen: PropTypes.func,
// };
