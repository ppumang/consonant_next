import Logo from './Logo';

const Header = (props) => {
    return (
        <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
            <Logo />
        </div>
    )
}

export default Header