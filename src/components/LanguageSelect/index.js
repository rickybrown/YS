import { useState } from 'react';
import { Select, MenuItem, FormControl, makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
// import i18n from 'i18next';

const languages = [
  ['en', 'english'],
  ['de', 'german']
]

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    textTransform: 'capitalize'
  },
  menuItem: {
    textTransform: 'capitalize'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function LanguageSelect() {
  const { t, i18n } = useTranslation();
  const [ language, setLanguage] = useState(i18n.language);
  const classes = useStyles();

  const changeLanguage = event => {
    let lng = event.target.value

    i18n.changeLanguage(lng);

    setLanguage(lng)
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <Select id="lng-select" value={language} onChange={changeLanguage}>
        {languages.map((lng, i) => (
          <MenuItem key={i} value={lng[0]} className={classes.menuItem}>
            {lng[1]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
