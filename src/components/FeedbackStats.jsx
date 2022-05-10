import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

export default function FeedbackStats(  ) {

    const { feedback } = useContext( FeedbackContext )

    //calculating average!
    let average = feedback.reduce( (acc ,curr) => {
        return acc + curr.rating
    } ,0 ) /feedback.length

    average = average.toFixed(1)


  return (
    <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average : {isNaN(average)?0:average}</h4>
    </div>
  )
}
