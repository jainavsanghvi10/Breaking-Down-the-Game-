import React from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@material-ui/core';

import img1 from '../../../assets/images/backgrounds/team1.jpg';
import img2 from '../../../assets/images/backgrounds/player2.jpg';
import img3 from '../../../assets/images/backgrounds/tournament2.jpg';
import img4 from '../../../assets/images/backgrounds/tournament1.jpg';


const blogs = [
	{
		img: img1,
		title: 'Team Insights: Unlocking the Secrets of Success',
		subtitle:
			'Introduction: Delve into the world of team-level statistics and discover the key insights that separate winning teams from the rest. From total goals to World Cup triumphs, explore the fascinating data that shapes the destiny of football teams.',
		btncolor: 'error',
		link: 'http://localhost:3000/team-stats',
	},
	{
		img: img2,
		title: 'Player Spotlight: Decoding Legends and Rising Stars',
		subtitle:
			"Introduction: Step into the spotlight and explore the remarkable journey of football players. Uncover intriguing details such as birth dates, positions, World Cup appearances, goals scored, and more. Get ready to be amazed by the statistical brilliance of football's finest.",
		btncolor: 'warning',
		link: 'http://localhost:3000/player-stats',
	},
	{
		img: img3,
		title: "Tournament Thrills: The Numbers Behind Football's Grand Stage",
		subtitle:
			"Introduction: Behind every thrilling tournament lies a treasure trove of statistical marvels. Dive into the heart of the action and unravel the numbers that define the FIFA World Cup. From goals scored to prestigious awards, witness the statistical grandeur of football's greatest showdowns.",
		btncolor: 'primary',
		link: 'http://localhost:3000/tournament-stats',
	},
];
const aboutBlog = [
	{
		img: img4,
		title:
			'Welcome to Football Analytics Hub: Empowering Your Decision-Making with Data',
		title2:
			'Unleashing Football Intelligence: Gain the Winning Edge with Data-Driven Insights',
		introduction:
			"Welcome to our football analytics platform, where knowledge meets performance and data unlocks the winning edge. In today's game, leveraging football analytics has become crucial for teams and individuals seeking an advantage that can make all the difference between triumph and defeat. Our platform empowers you with comprehensive insights derived from cutting-edge data analysis, revolutionizing the way teams strategize, players develop, and decisions are made.",

		subtitle1: 'Harnessing the Power of Football Analytics:',
		content1:
			'In the past decade, football analytics has witnessed an exponential surge, transforming into the cornerstone of team and player development. Gone are the days when a solitary performance analyst covered all aspects of the game. Today, teams are bolstered by a legion of specialists, including opposition analysts, recruitment analysts, data scientists, and data engineers. Their collective mission: to unlock the power of football intelligence.',

		subtitle2: 'Unlocking Technical Insights:',
		content2:
			'Football intelligence is the lifeblood that empowers coaches, managers, medical practitioners, technical directors, CEOs, and owners to make informed decisions. Our platform delivers a wealth of technical data, granting unparalleled insight into every facet of the game. By harnessing this data, our users gain a deeper understanding of the sport, enabling them to uncover patterns, identify strengths and weaknesses, and make more informed footballing decisions.',

		subtitle3: 'The Fascinating World of Statistical Analysis:',
		content3:
			"Advancements in technology have propelled statistical analysis to the forefront of football's evolution. Over the course of a match or an entire tournament, a myriad of data points are meticulously collected, offering an abundance of invaluable information. Our platform allows football analysts to draw crucial conclusions from this wealth of data, paving the way for game-changing strategies and tactics. Additionally, broadcasters and the press can now captivate football enthusiasts by presenting captivating statistical nuggets, enhancing the overall fan experience.",

		subtitle4: 'Empowering Your Journey:',
		content4:
			'Whether you are a dedicated football professional, an aspiring player, a passionate fan, or a curious observer, our platform equips you with the tools to explore the intricacies of the beautiful game. From team-level stats to player profiles and tournament analysis, we offer a comprehensive suite of features to help you uncover the insights that matter most.',
	},
];

const BlogCard = () => {
	const handleButtonClick = () => {
		// Replace `blogs.link` with the actual variable or value representing the new link
		const newLink = blogs.link;
		console.log(newLink)
		window.location.href = newLink;
	};

	return (
		<>
			<Grid container>
				<Grid container>
					{aboutBlog.map((blog, index) => (
						<Grid
							key={index}
							item
							xs={12}
							// lg={4}
							sx={{
								display: 'block',
								alignItems: 'stretch',
							}}>
							<Card
								variant='outlined'
								sx={{
									p: 0,
									width: '100%',
								}}>
								<CardContent
									sx={{
										paddingLeft: '30px',
										paddingRight: '30px',
									}}>
									<Typography
										sx={{
											fontSize: '50px',
											fontWeight: 'bold',
											// fontStyle: 'italic',
											fontFamily: 'Times New Roman',
										}}>
										{blog.title}
									</Typography>
									<img src={blog.img} alt='img' width='100%' />
									{/* Para0 */}
									<Typography
										color='textDisabled'
										sx={{
											fontSize: '15px',
											fontWeight: '50',
											mt: 1,
											// fontFamily:'monospace'
										}}>
										{blog.introduction}
									</Typography>

									{/* Para1 */}
									<Typography
										sx={{
											fontSize: 'h1.fontSize',
											fontWeight: 'bold',
											// fontFamily: 'Times New Roman',
											// sans-serif
										}}>
										{blog.subtitle1}
									</Typography>
									<Typography
										color='textDisabled'
										sx={{
											fontSize: '15px',
											fontWeight: '50',
											mt: 1,
											// fontFamily:'monospace'
										}}>
										{blog.content1}
									</Typography>

									{/* Para2 */}
									<Typography
										sx={{
											fontSize: 'h1.fontSize',
											fontWeight: 'bold',
											// fontFamily: 'Times New Roman',
										}}>
										{blog.subtitle2}
									</Typography>
									<Typography
										color='textDisabled'
										sx={{
											fontSize: '15px',
											fontWeight: '50',
											mt: 1,
											// fontFamily:'monospace'
										}}>
										{blog.content2}
									</Typography>

									{/* Para3 */}
									<Typography
										sx={{
											fontSize: 'h1.fontSize',
											fontWeight: 'bold',
											// fontFamily: 'Times New Roman',
										}}>
										{blog.subtitle3}
									</Typography>
									<Typography
										color='textDisabled'
										sx={{
											fontSize: '15px',
											fontWeight: '50',
											mt: 1,
											// fontFamily:'monospace'
										}}>
										{blog.content3}
									</Typography>

									{/* Para4 */}
									<Typography
										sx={{
											fontSize: 'h1.fontSize',
											fontWeight: 'bold',
											// fontFamily: 'Times New Roman',
										}}>
										{blog.subtitle4}
									</Typography>
									<Typography
										color='textDisabled'
										sx={{
											fontSize: '15px',
											fontWeight: '50',
											mt: 1,
											// fontFamily:'monospace'
										}}>
										{blog.content4}
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>

				<Grid container>
					{blogs.map((blog, index) => (
						<Grid
							key={index}
							item
							xs={12}
							lg={4}
							sx={{
								display: 'flex',
								alignItems: 'stretch',
							}}>
							<Card
								variant='outlined'
								sx={{
									p: 0,
									width: '100%',
								}}>
								<img src={blog.img} alt='img' width='100%' />
								<CardContent
									sx={{
										paddingLeft: '30px',
										paddingRight: '30px',
									}}>
									<Typography
										sx={{
											fontSize: 'h4.fontSize',
											fontWeight: 'bold',
										}}>
										{blog.title}
									</Typography>
									<Typography
										color='textSecondary'
										sx={{
											fontSize: '14px',
											fontWeight: '400',
											mt: 1,
										}}>
										{blog.subtitle}
									</Typography>

									<Button
										variant='contained'
										sx={{
											mt: '15px',
										}}
										color={blog.btncolor}
										onClick={handleButtonClick} // Add onClick event handler
									>
										Find Out More
									</Button>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Grid>
		</>
	);
};

export default BlogCard;
