import React, { useState, useEffect } from "react";

const Page3 = (props) => {
	const [obj, setObj] = useState({});

	useEffect(() => {
		if (__isBrowser__) {
			console.log("browser");
			setObj(window.__INITIAL_DATA__);
			delete window.__INITIAL_DATA__;
		} else {
			console.log("server");
			setObj(props.staticContext);
		}
	}, []);

	useEffect(() => {
		setTimeout(() => {
			if (!obj) {
				console.log("react");
				setObj({ name: "Marcos", age: 29, married: false });
			}
		}, 2000);
	}, [obj]);

	return <div>Page3 {JSON.stringify(obj)}</div>;
};

export default Page3;
