import { Component } from 'react';
import style from './Main.module.css';

class Main extends Component {
    render = () => {
        return (<main className={style.main}> {this.props.children} </main>
        );
    }
};

export default Main;