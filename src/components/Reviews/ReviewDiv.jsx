import Review from "./Review"
import './Review.css'

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
        <div style={{margin:'5rem calc(16vw - 2rem)'}}>
            <h3 style={{fontSize:"calc(1.2rem + .6vw)",textAlign:'center', fontWeight: "900", textShadow: '1px 0', letterSpacing: "1px", color: "rgba(2, 91, 93, 1)", marginBottom: 'calc(1rem + 1vw)',fontFamily:'Montserrat' }}>What our customers say</h3>
            <div className="d-flex reviewsection">
                {review.map((ele, index) => {
                    return <div key={index} className='col-10 col-md-3'>
                        <Review data={ele} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default ReviewDiv
