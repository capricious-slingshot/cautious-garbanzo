import React, {Component} from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

class CampsiteInfo extends Component{
  renderCampsite(campsite){
    return(
      <div className="col-md-5 m-1">
        <Card>
          <CardImg width="100%" src={campsite.image} alt={campsite.name} />
            <CardBody>
              <CardTitle>{campsite.name}</CardTitle>
              <CardText>{campsite.description}</CardText>
            </CardBody>
        </Card>
      </div>
    )
  }

  renderComments(comments) {

    if (comments){
      return(
        <div className="col-md-5 m-1">
          <h4>Comments</h4>
          {comments.map( c => {
            return (
              <div key={c.id}>
                <p>{this.formatRating(c.rating)} - {c.text}</p>
                <p className="text-right">-- {c.author} {this.formatDate(c, c.date)}</p>
              </div>
            )
          })}
        </div>
      )
    }
  }

  render(){
    if (this.props.campsite){
      return(
        <div className="row">
          {this.renderCampsite(this.props.campsite)}
          {this.renderComments(this.props.campsite.comments)}
        </div>
      );
    }else{
      return(
        <div />
      );
    }
  }

  formatDate(comment, date){
    return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))
  }

  formatRating(stars){
    const collection = []
    for (let s = 0; s < stars; s++) { collection.push('⭐')}
    return collection.join(' ')
    
  }
}

export default CampsiteInfo;