import { Component } from 'react';
import styles from './Header.module.css';
class Header extends Component {
    render = () => {
        return (
        <header className={styles.header} />);
    }
};

export default Header;