define(
    [
        'react',
        'reactDom',
    ],
    function (React, ReactDOM) {
        var ProfileInfoList = React.createClass({
            render: function() {
                var listItems = this.props.list.map(function(info, iterator){
                    return (
                        <li key={iterator}>
                            <a href={info.link}>
                                {info.description}
                                <span className={"pull-right badge "+info.badgeTheme}>
                                    {info.stats}
                                </span>
                            </a>
                        </li>
                    )
                });

                return (
                    <ul className="nav nav-stacked">
                        {listItems}
                    </ul>
                )   
            }
        });

        return ProfileInfoList;
    }
)