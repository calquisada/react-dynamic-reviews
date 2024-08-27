import React from "react";
import ReactDOM from "react-dom/client";

export const Testimonial = (props) => {
	return (
		<div className="card">
			<h2>{props.title}</h2>
			<h5>Submitted by {props.author} on {props.date}</h5>
			<h5>{props.stars} / 5 Stars</h5>
			<p>{props.content}</p>
		</div>
	);
}

export const App=()=> {
 return (<div>
    <Testimonial title="Great atmosphere!" author="Sheila S." date="11/10/20" stars={4} content="Great food, wait staff, and ambience. We'll be returning!" />
    <Testimonial title="Loved the Apps!" author="Kim Z." date="10/15/20" stars={3} content="The appetizers were fantastic, but the overall menu could be expanded." />
	<Testimonial title="Awesome place!" author="Chris A." date="08/23/2024" stars={4} content="The place was great. We will definitely be back!"/>
</div>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);