import React, { useEffect } from 'react';
import NextLink from 'next/link';
// import { useSelector } from "react-redux";
import { useRouter } from 'next/router';
// import PropTypes from "prop-types";
import { Box, Divider, Drawer, useMediaQuery, Typography } from '@mui/material';
// import {
//     FitnessCenter,
//     ConfirmationNumber,
//     Comment,
//     Badge,
//     Forum,
//     VideoSettings,
//     ViewCarousel,
//     AccountBox,
// } from '@mui/icons-material';
// import { Lock as LockIcon } from '../icons/lock';
// import { XCircle as XCircleIcon } from '../icons/x-circle';
import { Logo } from './logo';
import { NavItem } from './nav-item';

const items = [
    // {
    //   href: "/alliance/school-register",
    //   // icon: <FitnessCenter fontSize="small" />,
    //   title: "학교 등록",
    // },
    {
        href: '/alliance/school-register',
        // icon: <FitnessCenter fontSize="small" />,
        title: '학교 관리',
    },
    {
        href: '/',
        // icon: <FitnessCenter fontSize="small" />,
        title: '제휴사 관리',
    },
    {
        href: '/coupon',
        title: '쿠폰 관리',
    },
    {
        href: '/calculate',
        title: '정산 관리',
    },
    {
        href: '/sales',
        title: '판매 관리',
    },
    {
        href: '/market/lists',
        title: '상품 관리',
    },
    {
        href: '/market/buyndelivery',
        title: '구매 / 배송관리',
    },
    {
        href: '/community/free',
        title: '자유',
    },
    {
        href: '/community/information',
        title: '정보',
    },
    {
        href: '/community/job',
        title: '취업',
    },
    {
        href: '/community/honest',
        title: '솔직후기',
    },
    {
        href: '/member/lists',
        title: '회원관리',
    },
    {
        href: '/banner/tops',
        title: '상단 배너',
    },
    {
        href: '/banner/middles',
        title: '중단 배너',
    },
    {
        href: '/faq',
        title: '자주 묻는 질문 / 관리',
    },
];

export const DashboardSidebar = (props) => {
    const { open, onClose } = props;
    const router = useRouter();
    const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
        defaultMatches: true,
        noSsr: false,
    });

    // const { me } = useSelector((state) => state.adminUser);

    // const affiliateItems = [
    //     // {
    //     //     href: `/alliance/${me?.shop}`,
    //     //     // icon: <FitnessCenter fontSize="small" />,
    //     //     title: '내 업체 관리',
    //     // },
    //     {
    //         href: '/coupon',
    //         title: '쿠폰 관리',
    //     },
    //     {
    //         href: '/calculate',
    //         title: '정산 관리',
    //     },
    //     {
    //         href: '/sales',
    //         title: '판매 관리',
    //     },
    // ];

    useEffect(
        () => {
            // console.log('OH GOT', router.isReady, router.asPath);
            if (!router.isReady) {
                return;
            }

            if (open) {
                onClose?.();
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [router.asPath],
    );

    const content = (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                }}
            >
                <div>
                    <Box sx={{ p: 3 }}>
                        <NextLink href="/" passHref>
                            <a>
                                <Logo
                                    sx={{
                                        height: 42,
                                        width: 42,
                                    }}
                                />
                            </a>
                        </NextLink>
                    </Box>
                </div>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography ml={3} variant="overline" display="block" gutterBottom>
                        제휴사
                    </Typography>
                    {/* {console.log('== me ==', me)} */}
                    {/* {me?.auth_level === 0 */}

                    {items.map((item) => (
                        <React.Fragment key={item.title}>
                            {/* {console.log("items", item)} */}
                            <NavItem key={item.title} icon={item.icon} href={item.href} title={item.title} />
                            {item.title === '판매 관리' ? (
                                <>
                                    <Box my={3}>
                                        <Divider light={true} variant="middle" />
                                    </Box>
                                    <Typography ml={3} variant="overline" display="block" gutterBottom>
                                        마켓
                                    </Typography>
                                </>
                            ) : (
                                ''
                            )}
                            {item.title === '구매 / 배송관리' ? (
                                <>
                                    <Box my={3}>
                                        <Divider light={true} variant="middle" />
                                    </Box>
                                    <Typography ml={3} variant="overline" display="block" gutterBottom>
                                        커뮤니티
                                    </Typography>
                                </>
                            ) : (
                                ''
                            )}
                            {item.title === '솔직후기' ? (
                                <>
                                    <Box my={3}>
                                        <Divider light={true} variant="middle" />
                                    </Box>
                                    <Typography ml={3} variant="overline" display="block" gutterBottom>
                                        회원
                                    </Typography>
                                </>
                            ) : (
                                ''
                            )}
                            {item.title === '회원관리' ? (
                                <>
                                    <Box my={3}>
                                        <Divider light={true} variant="middle" />
                                    </Box>
                                    <Typography ml={3} variant="overline" display="block" gutterBottom>
                                        배너
                                    </Typography>
                                </>
                            ) : (
                                ''
                            )}
                            {item.title === '중단 배너' ? (
                                <>
                                    <Box my={3}>
                                        <Divider light={true} variant="middle" />
                                    </Box>
                                    <Typography ml={3} variant="overline" display="block" gutterBottom>
                                        Q & A
                                    </Typography>
                                </>
                            ) : (
                                ''
                            )}
                        </React.Fragment>
                    ))}
                </Box>
                <Divider sx={{ borderColor: '#2D3748' }} />
            </Box>
        </>
    );

    if (lgUp) {
        return (
            <Drawer
                anchor="left"
                open
                PaperProps={{
                    sx: {
                        backgroundColor: 'neutral.900',
                        color: '#FFFFFF',
                        width: 280,
                    },
                }}
                variant="permanent"
            >
                {content}
            </Drawer>
        );
    }

    return (
        <Drawer
            anchor="left"
            onClose={onClose}
            open={open}
            PaperProps={{
                sx: {
                    backgroundColor: 'neutral.900',
                    color: '#FFFFFF',
                    width: 280,
                },
            }}
            sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
            variant="temporary"
        >
            {content}
        </Drawer>
    );
};

// DashboardSidebar.propTypes = {
//   onClose: PropTypes.func,
//   open: PropTypes.bool,
// };
