import classNames from 'classnames';
import { FC } from 'react';
import { NavLink, useLocation, useResolvedPath } from 'react-router-dom';

type Props = {
  name: string,
  sex: string,
  slug: string,
};

export const PersonNavLink: FC<Props> = ({ name, sex, slug }) => {
  const location = useLocation();
  const parentPath = useResolvedPath('../').pathname;

  return (
    <NavLink
      to={{
        pathname: parentPath + slug,
        search: location.search,
      }}
      className={() => (
        classNames({ 'has-text-danger': sex === 'f' })
      )}
    >
      {name}
    </NavLink>
  );
};
