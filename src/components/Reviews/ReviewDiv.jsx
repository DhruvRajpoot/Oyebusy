import Review from "./Review"

const ReviewDiv = (props) => {
    const review = [
        {
            user: 'Ritu Kumar',
            review: 'Speaker/View Details Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus eleifend augue volutpat hendrerit. '
        },
        {
            user: 'Ritu Kumar',
            review: 'Speaker/View Details Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus eleifend augue volutpat hendrerit. '
        },
        {
            user: 'Ritu Kumar',
            review: 'Speaker/View Details Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus eleifend augue volutpat hendrerit. '
        },
        {
            user: 'Ritu Kumar',
            review: 'Speaker/View Details Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus eleifend augue volutpat hendrerit. '
        }
    ]

    return (
        <div style={{margin:'5rem 14rem'}}>
            <h3 style={{textAlign:'center', fontWeight: "900", textShadow: '1px 0', letterSpacing: "1px", color: "rgba(2, 91, 93, 1)", marginBottom: '2rem',fontFamily:'Montserrat' }}>What our customers say</h3>
            <div className="row">
                {review.map((ele, index) => {
                    return <div key={index} className='col-3'>
                        <Review data={ele} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default ReviewDiv
