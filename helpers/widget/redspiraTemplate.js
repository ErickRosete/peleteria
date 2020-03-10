
exports.redspiraHtml=(userWidget)=>{
    const htmlContent = `
    <div name="redspira_widget" key="${userWidget.id}"></div>
    <script type="text/javascript" src="${userWidget.url}"></script>
 
`
    return htmlContent
}
