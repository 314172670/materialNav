
说明：该项目为弹出的Nav

参考：
https://material-ui.com/style/css-baseline/


全局默认主题

https://material-ui.com/customization/default-theme/  如下使用：

    const styles = theme => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            textAlign: 'center',
            color: theme.palette.text.secondary,  //这里使用全局的主题颜色
        },
        appBar:{
            backgroundColor:'#262734',
        }

    });


图标库
https://material.io/tools/icons/?icon=account_balance&style=baseline  使用如下：

使用一：
import Icon from '@material-ui/core/Icon';
<Icon className={classes.icon}>account_balance</Icon>

使用二：
import SearchIcon from '@material-ui/icons/Search';
 <SearchIcon />

