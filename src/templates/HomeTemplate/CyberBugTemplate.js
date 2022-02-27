import React from 'react';
import { Route } from 'react-router-dom';
import ContentMain from '../../components/Cyberbugs/Main/ContentMain';
import HeaderMain from '../../components/Cyberbugs/Main/HeaderMain';
import InfoMain from '../../components/Cyberbugs/Main/InfoMain';
import MenuCyberbug from '../../components/Cyberbugs/MenuCyberbug';
import ModalCyberBug from '../../components/Cyberbugs/ModalCyberBug/ModalCyberBug';
import SidebarCyberBug from '../../components/Cyberbugs/SidebarCyberBug';
import '../../index.css';

// cách viết sử dụng HOC để tái sử dụng tốt hơn

export const CyberBugTemplate = (props) => {
    const { Component, ...restProps } = props;
    return (
        <Route {...restProps} render={(propsRoute) => {
            return (
                <>
                    <div className="jira">
                        <SidebarCyberBug />
                        <MenuCyberbug />
                        <Component {...propsRoute} />
                        <ModalCyberBug/>

                    </div>
                    {/* Search Modal */}
                    <div className="modal fade" id="searchModal" tabIndex={-1} role="dialog" aria-labelledby="searchModal" aria-hidden="true">
                        <div className="modal-dialog modal-search">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <div className="search-block">
                                        <input className="search" />
                                        <i className="fa fa-search" />
                                    </div>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <p>RECENT ISSUES</p>
                                    <div style={{ display: 'flex' }}>
                                        <div className="icon">
                                            <i className="fa fa-bookmark" />
                                        </div>
                                        <div>
                                            <p>cyberlearn</p>
                                            <p>BUG-238066</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

               

                </>
            )
        }} />
    )
}