import React from 'react';
import Paper from 'material-ui/Paper';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import AutoComplete from 'material-ui/AutoComplete';
import cache from '../../../data/genresCache.js'
import _ from 'underscore';
import GenresList from './GenresList'

const dataArr = _.keys(cache);


const GenresSearchbox = (props) => {  
  return (
  <div className = "Searchbox container-fluid">
    <div className="row">
          <AutoComplete
          floatingLabelText="Search for available genres"
          filter={AutoComplete.fuzzyFilter}
          dataSource={dataArr}
          maxSearchResults={5}
          className="AutoComplete"
        />
        <GenresList className="Searchbox-List"/>
    </div>
   </div>
      )
}

export default GenresSearchbox;