import PropTypes from 'prop-types';
import styled from 'styled-components';

const H2Container = ({ children, className }) => {
	return (
		<div className={className}>
			<h2>{children}</h2>
		</div>
	);
};

export const H2 = styled(H2Container)`
	margin: 40px 0;
`;

H2.propTypes = {
	children: PropTypes.node.isRequired,
};
