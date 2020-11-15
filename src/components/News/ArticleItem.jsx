import React from 'react';
import {GridList, GridListTile, GridListTileBar, IconButton} from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const ArticleItem = (props) => {
  return (
      <GridList cellHeight={300} spacing={3}>
            <GridListTile key={props.url} >
              <img src={props.urlToImage} alt={props.url}/>
              <GridListTileBar
                  title={props.title}
                  titlePosition="top"
                  actionPosition="left"
                  // className={classes.titleBar}
              />
            </GridListTile>
        )}
      </GridList>

      // title={el.title}
      // author={el.author}
      // description={el.description}
      // urlToImage={el.urlToImage}


  )
};

export default ArticleItem;