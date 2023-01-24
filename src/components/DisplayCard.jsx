import React from 'react'

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
const DisplayCard = (p) => {



    return (
        <div>

            <Card sx={{ maxWidth: 345 }}>
                <CardHeader


                    title={p.author}
                    subheader={p.publishedAt}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={p.urlToImage}
                    alt={p.title}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {p.title}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    
                        <CardActions>
                            <Button size="small">Read Now</Button>
                        </CardActions>
                    

                </CardActions>
            </Card>


        </div>
    )
}

export default DisplayCard