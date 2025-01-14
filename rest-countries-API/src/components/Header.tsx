type Props = {
    title: string
}

function Header(props: Props) {
    const { title } = props 
    return (
        <div>{title}</div>
    )
}

export default Header