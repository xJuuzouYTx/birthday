import React from 'react';
import Header from '@components/Header';
import '@styles/Layout.scss';
import toast, { Toaster } from 'react-hot-toast';

const Layout = ({ children }) => {
	return (
		<div className="Layout light">
			<Header />
			<Toaster />
			{children}
		</div>
	);
}

export default Layout;
