import styled from 'styled-components';

export const H2Container = ({ children, className }) => {
	return <div className={className}>{children}</div>;
};

export const H2 = styled(H2Container)`
	margin: 40px 0;
`;
