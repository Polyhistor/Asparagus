import "reflect-metadata";
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";

function routerBinder(method: string) {
  return function(path: string): Function {
    return function(target: any, key: string, desc: PropertyDescriptor) {
      console.log(target);
      console.log(target[key]);
      console.log(path);
      Reflect.defineMetadata(MetadataKeys.path, path, target, target[key]);
      Reflect.defineMetadata(MetadataKeys.method, method, target, key);
    };
  };
}

export const get = routerBinder(Methods.get);
export const put = routerBinder(Methods.put);
export const patch = routerBinder(Methods.patch);
export const post = routerBinder(Methods.post);
export const del = routerBinder(Methods.del);
