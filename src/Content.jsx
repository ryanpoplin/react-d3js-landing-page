
import React from 'react';
import { Row, Col, Image, Input, ButtonInput } from 'react-bootstrap';

import Section, { SectionTitle, Panel } from './Section';
import { LeftColumn, WideLeftColumn, RightColumn, NarrowRightColumn, SingleColumn, MiddleColumn, HalfColumn } from './Columns';

export const Header = () => (
    <header className="text-left container">
        <Row>
            <Col md={10} mdOffset={1}>
	    <h1>Have you tried React?</h1>
	    <p className="lead">React with d3.js was the most fun I've had in years.</p>
            </Col>
	</Row>
    </header>
);

export const BookIntro = ({ className }) => (
    <Section className={className}>
        <LeftColumn>
            <p>
		Creating dynamic data visualizations on the web is a pain in the ass.
	    </p>

	    <p>
                You either have to use dumbed down libraries that won't let you do what you want, or make everything from scratch. Every time.
            </p>
            <p>
                You want a <strong>quick way to build complex visualizations</strong>. Build once, use everywhere. In every project. Don't believe me? Scroll down.
	    </p>

	    <p>
		With <strong>React+d3.js</strong> you'll learn how to build re-usable visualization components in about an hour.
	    </p>

	    <p>
		<em><strong>Interested?<br/>
		    <a href="#packages">Go straight to the packages.</a></strong></em>
	    </p>
        </LeftColumn>
        <RightColumn>
            <figure className="text-center">
		<img src="img/cover.png" alt="React+d3js ES6 edition" className="img-thumbnail" />
	    </figure>
        </RightColumn>
    </Section>
);


export const Why = () => (
    <div>
        <SectionTitle>Learning a new paradigm is hard</SectionTitle>
        <WideLeftColumn>
            <p>
	        React offers a completely new way of thinking about web applications.
	    </p>

            <p>
                No more strange spaghetti JavaScript. No more business logic tied to HTML. When was the last time you felt safe changing the nesting structure of your HTML? The last time you knew the app won't break just because a designer changed something?.
            </p>

            <p>
                It's even worse with visualizations. Libraries that work juuuust a little differently than you'd want, d3.js code you wrote last time, but can't reuse anywhere else. And updating the visualization together with the rest of the interface is a beast.
            </p>

	    <p>
	        React with d3.js fixes all of that.
            </p>
            <p>
                But learning a whole new approach to coding is hard. It takes time and effort. Time you'd rather spend solving your real problems. Making code cleaner, easier to maintain, and delivering value to your users.
	    </p>
        </WideLeftColumn>
        <NarrowRightColumn className="text-center">
            <span className="icon icon-frown icon-white icon-6x"></span>
        </NarrowRightColumn>
    </div>
);

export const What = () => (
    <div>
        <Row>
            <SectionTitle>React+d3.js the book</SectionTitle>
            <SingleColumn>
                <p>
		    React+d3.js is designed to be short, but comprehensive.
	        </p>

	        <p>
		    In about an hour, it will guide you through a whole React and d3.js project from start to finish.<br />
		    Everything from setting up code compilation, to creating reusable visualization components.
	        </p>
            </SingleColumn>
        </Row>
        <Row>
            <LeftColumn>
                <h3>React+d3.js</h3>

		<p>
		    Learn how to build reusable visualization components that work anywhere, with any data.
		</p>

		<p>
		    Fly through the code with to-the-point instructions and a healthy dose of interesting banter.
		</p>
            </LeftColumn>
            <RightColumn mdOffset={1}>
                <h3>Using React with d3.js</h3>

		<ul className="icons-ul">
		    <li><span className="icon-li icon-sitemap"></span>
			<strong>Declarative.</strong><br />
			Say what you want, not how.
		    </li>
		    <li><span className="icon-li icon-random"></span>
			<strong>Reusable.</strong><br />
			Code once, use everywhere.
		    </li>
		    <li><span className="icon-li icon-bolt"></span>
			<strong>Fast.</strong><br />
			Render only the stuff that changes.
		    </li>
		</ul>
            </RightColumn>
        </Row>
    </div>
);

export const FreeSample = () => (
    <div>
        <Row>
            <SectionTitle nomargin>Get a free sample</SectionTitle>
            <SingleColumn className="lead">A taste of what's included with the book.</SingleColumn>
        </Row>

        <Row>
            <SingleColumn>
                <Panel>
                    <Image src="img/sample.png" rounded responsive />
                    <SampleForm />
                </Panel>
            </SingleColumn>
        </Row>
    </div>
);

export const SampleForm = () => (
    <DripForm id="5362865">
        <h3 data-drip-attribute="headline">
            React+d3.js sample chapter and mini-course
        </h3>
        <p data-drip-attribute="description">
            Leave your email and get a free sample of React+d3.js and a mini email course. They will teach you about the basic architecture of React apps and show you how JSX makes your code better.
        </p>
    </DripForm>
);

export const DripForm = ({ id, children }) => {
    let url = `https://www.getdrip.com/forms/${id}/submissions`;

    return (
        <form action={url} method="post" target="_blank" data-drip-embedded-form={id}>
            {children}
            <MiddleColumn>
                <Input type="text" placeholder="Email"
                       label="Email Address" name="fields[email]" />
                <input type="submit" name="submit" value="Sign Up"
                       data-drip-attribute="sign-up-button"
                       className="btn btn-lg btn-success text-uppercase" />
            </MiddleColumn>
        </form>
    );
};

export const Screencast = () => (
    <div>
        <Row>
            <SectionTitle nomargin>Full HD screencast</SectionTitle>
            <SingleColumn className="lead text">Watching code appear before your eyes makes it easier to understand.</SingleColumn>
        </Row>
        <Row>
            <SingleColumn>
                <div className="text-center">
                    <Image src="img/screencast.gif" alt="screencast-preview" thumbnail />
                </div>
                <p>
		    A 60 minute full HD screencast will guide you through everything in the book and show you just how it all fits together.
		</p>

		<p>
		    Don't miss something just because you made a typo.
		</p>
            </SingleColumn>
        </Row>
    </div>
);

export const Author = () => (
    <Row>
        <LeftColumn className="padding-big-top margin-medium-top">
            <figure className="text-center">
                <Image src="img/me.png" alt="Swizec Teller" circle responsive className="margin-medium-top" />
            </figure>
        </LeftColumn>
        <RightColumn>
            <h2>About the Author</h2>
	    <p>Hi, I’m Swizec Teller. A digital nomad and full stack web engineer.</p>
            <p>I travel the world and help startups win. From setting up new teams and training juniors, to fixing spaghetti code and implementing new features.</p>
            <p>My code has been used by MasterCard, Commerzbank, Google, Mashable, Lyft, and many others.</p>
            <p>When I’m not coding, I’m writing.</p>
            <p>At least 5000 people bought my books ... I don’t know if that’s a lot, but it’s more than zero. I like that.</p>
            <p>My work has been featured in Business Insider, LifeHacker, Huffington Post, and several dead-tree magazines. I’ve spoken on BBC Radio, appeared on Slovenian national television, and given talks all over the world.</p>
        </RightColumn>
    </Row>

);

export const Questions = () => (
    <SingleColumn>
        <p className="text-center"><strong>Questions?</strong> Please <a href="mailto:swizec@swizec..com"><span className="icon icon-envelope-alt"></span>&#32;drop me a line</a> and I&#8217;ll do my best to answer them.</p>
    </SingleColumn>
);

export const FAQ = () => (
    <div>
        <Row>
            <Col md={5} mdOffset={1}>
                <h2>
		    Is React+d3.js for me?
		</h2>
		<p>
		    Yes. <br />If you already know JavaScript and you've tried d3.js before, this is the book for you. If you just want to learn about React, that's great too. Test readers said it's great for learning how to use React.<br />
                    But if you're new to web programming, I suggest finding something easier.
 		</p>
            </Col>
            <Col md={5}>
                <h2>
		    Which package should I choose?
		</h2>
		<p>
		    That depends on what you need. If you're a single developer trying to learn about React and writing reusable visualization components, go for the Engineer package. Some of the material looks better when it moves.br/>
                    But if you have a team that's growing,  go for the Business package. I'll set up a call to help you apply these principles in your specific case. And you'll get a license that lets you share the book with all team members.
		</p>
            </Col>
        </Row>
        <Row>
            <Col md={5} mdOffset={1}>
                <h2>
		    What if I hate React+d3js ES6?
		</h2>
		<p>
                    That's fair. I have a 45-day full money back guarantee. Just send me an email.
		</p>
            </Col>
            <Col md={5}>
                <h2>
		    I have another question!
		</h2>
		<p>
		    Awesome! Just ping me on twitter or send me an email. I'm @swizec.
		</p>
            </Col>
        </Row>
    </div>
);
