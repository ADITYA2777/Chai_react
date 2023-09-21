function customRender(reactElement, mainContainer) {
    

    const domElement = document.createElement('reactElement.type')
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    Container.appendChild(domElement)
}
    const reactElement = {
        type: "a",
        props: {
            href: "https://google.com",
            target: '_blank',
        },
        children: 'click google button'
    }
    const mainContainer = document.querySelector('#root')

    customRender(reactElement, mainContainer)
