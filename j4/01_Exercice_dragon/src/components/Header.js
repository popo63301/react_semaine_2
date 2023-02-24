import React, { useEffect } from 'react';

import {
    useSelector, 
    useDispatch
} from 'react-redux';

import { 
    reverse_dragon_list, 
    start_counter, 
    stop_start_counter 
} from '../actions/actions-types';

const Header = () => {
    const { count, chronoCounter , stop} = useSelector(state => { 

        return { 
            count : state.dragonReducer.count,
            chronoCounter : state.chronoReducer.counter,
            stop : state.chronoReducer.stop
        } 
    } );
    const dispatch = useDispatch();

    // Au montage du composant on déclenche le counter
    useEffect(()=>{
        if(stop == true) return ;

        dispatch(start_counter());

    }, [stop]);

    return (
        <div className="Header-main">
            <p> Chrono : {chronoCounter}</p>
            <p> Dragon list number of dragon(s) {count}</p>
            <p><button onClick={() => dispatch(reverse_dragon_list())}>Reverse dragon list</button></p>
            <p><button onClick={() => dispatch(stop_start_counter())}>Stop/start counter</button></p>
        </div>
    );
}

export default Header;