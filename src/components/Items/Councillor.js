import React from 'react';
import {
	Section,
	Image,
} from '../toolbox';

import Link from 'gatsby-link';
import slugify from 'slugify';

const Councillor = ({councillor}) => {
	return (
		<Section.Column
			
			verticalAlign = "middle"
		>
			<Image
				src = { `
				${
		councillor.node
			.image
			? "https://res.cloudinary.com/codogo/image/fetch/h_530,w_430,c_fill,g_face,f_auto/https:" +
							councillor
								.node
								.image
								.file
								.url
			: profileImage
		}` }
				as = { Link }
				to = { `/councillors/${ slugify(
					councillor.node
						.name,
					{ lower: true, },
				) }` }
			/>

			<h4>
				{councillor.node.name}
			</h4>
		</Section.Column>
	);
};

export default Councillor;