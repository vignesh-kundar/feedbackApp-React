import PropTypes from 'prop-types'

function Header ( {text , bgcolor , color} )  {

const headerStyles = {
    backgroundColor : bgcolor,
    color : color
}

return(
    <header style={headerStyles}>
        <div className="container" >
        <h2>{ text }</h2>
        </div>
    </header>
)
}

Header.defaultProps = {
    text : 'Feedback UI',
    bgcolor : "#171717",
    color : "#ff6a95",
}

Header.protoTypes = {
    text: PropTypes.string,
    bgcolor : PropTypes.string,
    color : PropTypes.string,
}

export default Header;