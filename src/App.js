import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {requestData} from './redux/actions/actions';
import { deleteElement } from "./redux/actions/actionsCreators";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(requestData())
	}, [dispatch]);

	const data = useSelector(state => state.data);

	const handleClick = (el) => {
		dispatch(deleteElement(el))
	}
	
	return (
		<>
			<h1>Test</h1>
			{data?.map((el) => (
				<h3 onClick={() => handleClick(el)}>
					{el.name}
				</h3>
			))}
		</>
	);
}

export default App;
