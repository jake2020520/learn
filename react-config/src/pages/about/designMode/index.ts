/**
 * 类装饰器重载构造函数
 * 类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数
 * 如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明
 * @param params 参数
 * @param target HttpClient 原型
 * @returns 用返回的类重写构造函数
 */
 
 const logClass = (params:any)=> (target:any)=>{ 
  
  return class  extends target{
      params = params
      apiUrl = '修改后的apiUrl'
      testAttribute = '测试添加属性' 
      getData(){ // 覆盖 getData 方法
          this.apiUrl += '----'
          console.log(this.apiUrl); //修改后的apiUrl----
      }
     
      testMethod(){
          console.log('测试添加方法')
          return '测试添加方法'
      }
  }
} 

@logClass('参数')
class HttpClient {
  public apiUrl: string | undefined; 
  getData() {
      console.log(this.apiUrl);
  }
  origin(){ //因为装饰器中没有 origin 方法所以 他没有别覆盖掉
   
      return "我没有覆盖"
  }

}
var http: any = new HttpClient();

console.log(http.apiUrl) //修改后的apiUrl
http.getData(); //执行了装饰器里面的方法
console.log(http.testMethod()) //测试添加方法
console.log(http.apiUrl) //修改后的apiUrl----
console.log(http.testAttribute) //测试添加属性
console.log(http.params) //测试添加参数 
console.log(http.origin()) //测试添加参数 


// target [Function: Person] { say: [Function] }
// propertyKey say
// {
//   value: [Function],
//   writable: true,
//   enumerable: false,
//   configurable: true
// }