import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={ showAdd ? 'maroon' : '#65BE60' } text={ showAdd ? '✕' : '＋' } onClick={onAdd} />
        </header>
    )
}

Header.defaultProps = {
    title: 'currentslate',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
