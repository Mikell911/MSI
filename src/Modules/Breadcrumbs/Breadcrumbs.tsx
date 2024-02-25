import React from 'react';
import { useLocation, Link } from 'react-router-dom';

interface BreadcrumbsProps {}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = () => {
    const location = useLocation();

    if (location.pathname === '/') {
        return null;
    }

    const pathSegments = location.pathname.split('/').filter((path) => path !== '');
    const crumbPath = pathSegments.map((crumb, index, array) => {
        const pathToCrumb = `/${array.slice(0, index + 1).join('/')}`;
        const isLastCrumb = index === array.length - 1;
        const crumbText = decodeURI(crumb);

        return (
            <React.Fragment key={crumb}>
                {' > '}
                {isLastCrumb ? (
                    <span className='text-xs text-black'>{crumbText}</span>
                ) : (
                    <Link className='text-xs text-dark-blue' to={pathToCrumb}>
                        {crumbText}
                    </Link>
                )}
            </React.Fragment>
        );
    });

    return (
        <div className={'max-sm:hidden'}>
            <div className='container flex items-center gap-2'>
                <Link className='text-xs text-dark-blue' to='/'>
                    Home
                </Link>
                {crumbPath}
            </div>
        </div>
    );
};
