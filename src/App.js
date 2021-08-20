import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {requestData} from './redux/actions/actions';
function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(requestData())
	});

	const data = useSelector(state => state.data);
	
	return (
		<>
			<h1>Test</h1>
			{data?.map((el) => (
				<h3>
					{el.name}
				</h3>
			))}
		</>
	);
}

export default App;
