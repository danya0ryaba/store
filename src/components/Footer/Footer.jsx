import React from 'react'
import './footer.scss'
import logo from '../../image/header/LOGO.svg'

export const Footer = () => {
    return <footer className='footer'>
        <img className='footer__logo' src={logo} alt="logo" />
        <span className='footer__info'>Developed by <a href=".">Ryabenkov</a> </span>

        <div className="footer__image">
            <a href="/">
                <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.7084 21.6147H7.29171C3.70837 21.6147 1.30212 19.2084 1.30212 15.6251V9.37508C1.30212 5.79175 3.70837 3.3855 7.29171 3.3855H17.7084C21.2917 3.3855 23.698 5.79175 23.698 9.37508V15.6251C23.698 19.2084 21.2917 21.6147 17.7084 21.6147ZM7.29171 4.948C4.60421 4.948 2.86462 6.68758 2.86462 9.37508V15.6251C2.86462 18.3126 4.60421 20.0522 7.29171 20.0522H17.7084C20.3959 20.0522 22.1355 18.3126 22.1355 15.6251V9.37508C22.1355 6.68758 20.3959 4.948 17.7084 4.948H7.29171Z" />
                    <path d="M11.0312 16.1771C10.7292 16.1771 10.4375 16.1042 10.1771 15.9584C9.57292 15.6146 9.21875 14.9167 9.21875 14.0521V10.9688C9.21875 10.1042 9.5625 9.40628 10.1771 9.06253C10.7813 8.71878 11.5625 8.78128 12.3021 9.22919L14.875 10.7709C15.5833 11.1979 15.9896 11.8334 15.9896 12.5104C15.9896 13.1875 15.5833 13.8229 14.875 14.25L12.3021 15.7917C11.875 16.0417 11.4375 16.1771 11.0312 16.1771ZM11.0312 10.3854C10.9988 10.385 10.9667 10.3921 10.9375 10.4063C10.8646 10.4479 10.7813 10.6354 10.7813 10.9584V14.0417C10.7813 14.3542 10.8646 14.5417 10.9375 14.5938C11.0208 14.6354 11.2187 14.6146 11.4896 14.4479L14.0625 12.9063C14.3229 12.75 14.4167 12.5938 14.4167 12.5C14.4167 12.4063 14.3229 12.2604 14.0625 12.0938L11.4896 10.5521C11.3021 10.4375 11.1354 10.3854 11.0312 10.3854Z" />
                </svg>

            </a>
            <a href="/">
                <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.3646 23.6979H10.6771V16.1458H9.6875C9.08333 16.1458 8.59375 15.6562 8.59375 15.0521V13.0729C8.59375 12.4688 9.08333 11.9792 9.6875 11.9792H10.6771V9.375C10.6771 7.21875 12.4271 5.46875 14.5833 5.46875H17.3958C18 5.46875 18.4896 5.95833 18.4896 6.5625V9.0625C18.4896 9.66667 18 10.1562 17.3958 10.1562H15.3646V11.9792H17.3229C17.4844 11.9783 17.6441 12.0135 17.7904 12.082C17.9366 12.1506 18.0658 12.2508 18.1685 12.3755C18.2712 12.5001 18.3449 12.6461 18.3842 12.8027C18.4236 12.9594 18.4275 13.1229 18.3958 13.2812L18 15.2604C17.8958 15.7708 17.4479 16.1354 16.9271 16.1354H15.3646V23.6979ZM12.2396 22.1354H13.8021V14.5833H16.5521L16.7604 13.5417H13.8125V9.6875C13.8125 9.08333 14.3021 8.59375 14.9062 8.59375H16.9375V7.03125H14.5833C13.2917 7.03125 12.2396 8.08333 12.2396 9.375V13.5417H10.1562V14.5833H12.2396V22.1354Z" />
                    <path d="M15.625 23.6978H9.37504C3.71879 23.6978 1.30212 21.2812 1.30212 15.6249V9.37492C1.30212 3.71867 3.71879 1.302 9.37504 1.302H15.625C21.2813 1.302 23.698 3.71867 23.698 9.37492V15.6249C23.698 21.2812 21.2813 23.6978 15.625 23.6978ZM9.37504 2.8645C4.57296 2.8645 2.86462 4.57284 2.86462 9.37492V15.6249C2.86462 20.427 4.57296 22.1353 9.37504 22.1353H15.625C20.4271 22.1353 22.1355 20.427 22.1355 15.6249V9.37492C22.1355 4.57284 20.4271 2.8645 15.625 2.8645H9.37504Z" />
                </svg>

            </a>
            <a href="/">
                <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.3645 23.4376H9.11454C3.45829 23.4376 1.04163 21.0209 1.04163 15.3647V9.11467C1.04163 3.45842 3.45829 1.04175 9.11454 1.04175H15.3645C21.0208 1.04175 23.4375 3.45842 23.4375 9.11467V15.3647C23.4375 21.0209 21.0208 23.4376 15.3645 23.4376ZM9.11454 2.60425C4.31246 2.60425 2.60413 4.31258 2.60413 9.11467V15.3647C2.60413 20.1667 4.31246 21.8751 9.11454 21.8751H15.3645C20.1666 21.8751 21.875 20.1667 21.875 15.3647V9.11467C21.875 4.31258 20.1666 2.60425 15.3645 2.60425H9.11454Z" />
                    <path d="M12.5 16.9271C11.3267 16.9243 10.2022 16.457 9.37258 15.6274C8.54293 14.7977 8.07563 13.6733 8.07288 12.5C8.07563 11.3267 8.54293 10.2023 9.37258 9.37262C10.2022 8.54298 11.3267 8.07567 12.5 8.07292C13.6732 8.07567 14.7977 8.54298 15.6273 9.37262C16.457 10.2023 16.9243 11.3267 16.927 12.5C16.9243 13.6733 16.457 14.7977 15.6273 15.6274C14.7977 16.457 13.6732 16.9243 12.5 16.9271ZM12.5 9.63542C10.9166 9.63542 9.63538 10.9167 9.63538 12.5C9.63538 14.0833 10.9166 15.3646 12.5 15.3646C14.0833 15.3646 15.3645 14.0833 15.3645 12.5C15.3645 10.9167 14.0833 9.63542 12.5 9.63542ZM17.7083 7.8125C17.5729 7.8125 17.4375 7.78125 17.3125 7.72917C17.1875 7.67709 17.0729 7.60417 16.9687 7.51042C16.875 7.40625 16.7916 7.29167 16.7395 7.16667C16.6894 7.04083 16.6646 6.9063 16.6666 6.77084C16.6666 6.63542 16.6875 6.5 16.7395 6.375C16.802 6.23959 16.875 6.13542 16.9687 6.03125C17.0208 5.98959 17.0729 5.9375 17.125 5.90625C17.1875 5.86459 17.25 5.83334 17.3125 5.8125C17.5023 5.73356 17.7112 5.7122 17.9131 5.7511C18.115 5.79 18.3009 5.88743 18.4479 6.03125C18.5416 6.13542 18.6145 6.23959 18.6666 6.375C18.7187 6.5 18.75 6.63542 18.75 6.77084C18.75 6.90625 18.7187 7.04167 18.6666 7.16667C18.6145 7.29167 18.5416 7.40625 18.4479 7.51042C18.3437 7.60417 18.2291 7.67709 18.1041 7.72917C17.9791 7.78125 17.8437 7.8125 17.7083 7.8125Z" />
                </svg>

            </a>
        </div>

    </footer>
}
