//包含n个日期时间处理的工具函数模块
//格式日期    工厂函数
export function formateDate(time){
    if(!time)return ''
    let date = new Date(time)
    return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+
        ''+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()
}