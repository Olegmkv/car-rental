import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { StyledUl } from "./Catalog.styled";
import { CardItem } from "../CardItem/CardItem";
import { fetchCatalog } from "../../redux/operations";
import { nextPage, prevPage } from "../../redux/paramsSlice";
import { selectCatalog, selectError, selectParams } from "../../redux/selectors";


export const Catalog = () => {
    const dispatch = useDispatch();

    const error = useSelector(selectError);
    const params = useSelector(selectParams);
    const catalog = useSelector(selectCatalog);
 
    useEffect(() => {
        dispatch(fetchCatalog(params))
    }, [params, dispatch]);

        const handlePrevPage = () => {
        dispatch(prevPage());
    }
    const handleNextPage = () => {
        dispatch(nextPage());
    }

    return (
        <>
            {!error && <StyledUl>
                <p>{params}</p>
                {catalog.map(card => {
                    return (
                        <CardItem key={card.id} card={card} />
                    )
                })}
            </StyledUl>
            }
            {!error && <button onClick={handlePrevPage} >Prev Page</button>}
            {!error && <button onClick={handleNextPage} >Next Page</button>}
        </>
    );
};