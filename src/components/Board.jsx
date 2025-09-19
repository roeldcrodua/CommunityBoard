import Card from './Card'

const Board = () => {
    return (
        <div className='board'>
            <Card event='Lunch & Learn for Seniors 55+' location='Village Center Complex' date='September 12, 2025' time='11:00 AM - 12:00 PM' image='https://vpsfl.org/ImageRepository/Document?documentID=6949' details='https://vpsfl.org/Calendar.aspx?EID=3295'/>
            <Card event='Hispanic Heritage Festival' location='Village Center Complex' date='September 19, 2025' time='6:00 PM - 8:00 PM' image='https://vpsfl.org/ImageRepository/Document?documentID=6991' details='https://vpsfl.org/Calendar.aspx?EID=3364'/>
            <Card event='Lotería (Mexican Bingo) at the Library' location='Palm Springs Public Library' date='September 29, 2025' time='3:00 PM - 4:00 PM' image='https://vpsfl.org/ImageRepository/Document?documentID=6959' details='https://vpsfl.org/Calendar.aspx?EID=3328'/>
            <Card event='55+ Senior Health Fair' location='Village Center Complex' date='October 18, 2025' time='9:00 AM - 12:00 PM' image='https://vpsfl.org/ImageRepository/Document?documentID=6950' details='https://vpsfl.org/Calendar.aspx?EID=3296'/>
            <Card event='Senior Lunch & Learn' location='Village Center Complex' date='August 13, 2025' time='
11:30 AM - 12:30 PM' image='https://vpsfl.org/ImageRepository/Document?documentID=6911' details='https://vpsfl.org/Calendar.aspx?EID=3291'/>
        </div>

    )
}

export default Board;