import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'

import { AiFillGithub } from 'react-icons/ai'
import { RiExternalLinkFill } from 'react-icons/ri'

const FeaturedCard = ({ project, i }) => {
	return (
		<div className={i !== 1 ? "feature-card" : "feature-card inverted"}>
			<div className="thumb-cont">
				<div className="img-cont">
					<div className="overlay"></div>
					<Image fluid={project.thumb.childImageSharp.fluid} alt={project.title} />
				</div>
			</div>
			<div className="content-cont">
				<Link to={`/${project.slug}`}><h5 className="mono">Featured Project</h5></Link>
				<Link to={`/${project.slug}`}><h2>{project.title}</h2></Link>
				<p className="description-cont">{project.description}</p>
				<div className="tags">
					{project.tags.map(t => (
						<span className="mono">{t}</span>
					))}
				</div>
				<div className="navigation">
					<a href={`${project.source}`} target="_blank"><AiFillGithub /></a>
					<a href={`${project.demo}`} target="_blank"><RiExternalLinkFill /></a>
				</div>
			</div>
		</div>
	)
}

export default FeaturedCard
