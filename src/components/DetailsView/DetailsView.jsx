function DetailsView(){
    return(
        // array.map all genres
        <div id="details-view">
            <h2 className="details-title">Movie Title</h2>
            <p className="details-description">description here</p>
            <img className="details-img"/>
            <div className="genre-holder">
                <div className="genre-tag">Genre 1</div>
                <div className="genre-tag">Genre 2</div>
            </div>
            <button className="details-return-btn">Return to library</button>
        </div>
    )
}
export default DetailsView;