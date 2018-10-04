import Link from "gatsby-link";
import Moment from "moment";
import PropTypes from "prop-types";
import React from "react";
import slugify from "slugify";
import styled from "styled-components";

import {
	Button,
	Section,
	Icon,
	Image,
} from "../toolbox";

// ----------------------------------------------------

const EventThumbnail = styled(Image)`
	.ui.image {
		display: flex;
	}

	img {
		background-color: rgba(255, 255, 255, 0.7);
		width: 100%;
		border-radius: 0;
		font-size: 1.33em;
		max-height: 250px;
		height: 100%;
		object-fit: contain;
	}
`;

// ----------------------------------------------------

const EventItem = ( { event, }, ) => (
	<Section>
		<Section.Row>
			<Section.Column>
				<EventThumbnail
					src = {
						( event.node.image ) ?
							`https://res.cloudinary.com/codogo/image/fetch/w_800,c_fill,g_face,f_auto/https:
						${ event.node.image.file.url }` : "https://images.ctfassets.net/j8b2h64cwsnc/1ZTuenkUXyQ2Ysg2yi2q2S/13fd01df20e971e456e7763413b01d0f/Artboard_1.png"
					}
					as = { Link }
					to = {
						"/events/" +
						slugify(event.node.title)
					}
				/>
			</Section.Column>

			<Section.Column>
				<Link
					to = {
						"/events/" +
						slugify(event.node.title)
					}
				>
					<h3>
						{event.node.title}
					</h3>
				</Link>

				<p>
					{Moment(event.node.date).format(
						"MMMM Do YYYY",
					)}
				</p>

				{event.node.membersOnly && (
					<p>
						Members only
					</p>
				)}

				<p>{event.node.description}</p>

				<Button
					as = { Link }
					size = "small"
					to = {
						"/events/" +
						slugify(event.node.title)
					}
				>
					Read more{" "}
					<Icon name = "right arrow" />
				</Button>
			</Section.Column>
		</Section.Row>
	</Section>
);

EventItem.propTypes = {
	event: PropTypes.object,
};

export { EventItem, };