/** Generate by swagger-axios-codegen */
// @ts-nocheck
/* eslint-disable */
import { getConfigs, axios } from './serviceOptions';
export const basePath = '/api-system';
export class ListResultDto {
    items;
}
export class PagedResultDto {
    totalCount;
    items;
}
// customer definition
// empty
export class ProjectManageApiImplService {
    /**
     * 项目管理添加
     */
    static addProjectManage(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/ProjectManage/addProjectManage';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['projectInfo'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 项目管理删除
     */
    static deleteProjectManage(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/ProjectManage/deleteProjectManage';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { id: params['id'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 项目管理查询
     */
    static selectProjectManage(options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/ProjectManage/selectProjectManage';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 模块查询
     */
    static selectProjectOfModelManage(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/ProjectManage/selectProjectOfModelManage';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { parentId: params['parentId'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 项目管理更新
     */
    static updateProjectManage(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/ProjectManage/updateProjectManage';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['projectInfo'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class TaskBindingAssociationTableRecordApiImplService {
    /**
     * 新增关联表
     */
    static addTaskBindingAssociationTableRecord(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/TaskBindingAssociationTableRecord/addTaskBindingAssociationTableRecord';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['taskBindingAssociationTableRecordRequest'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 查询关联表
     */
    static selectTaskBindingAssociationTableRecord(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/TaskBindingAssociationTableRecord/selectTaskBindingAssociationTableRecord';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { taskId: params['taskId'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 更新关联表
     */
    static updateTaskBindingAssociationTableRecord(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/TaskBindingAssociationTableRecord/updateTaskBindingAssociationTableRecord';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['taskBindingAssociationTableRecordRequest'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class TaskBindingConditionRecordTableApiImplService {
    /**
     * 新增条件记录
     */
    static addTaskBindingConditionRecordTable(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/TaskBindingConditionRecordTable/addTaskBindingConditionRecordTable';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['conditionRecordTableList'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 查询条件记录
     */
    static selectTaskBindingConditionRecordTable(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/TaskBindingConditionRecordTable/selectTaskBindingConditionRecordTable';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { taskId: params['taskId'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 更新条件记录
     */
    static updateTaskBindingConditionRecordTable(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/TaskBindingConditionRecordTable/updateTaskBindingConditionRecordTable';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['conditionRecordTableList'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class DatabaseManageApiImplService {
    /**
     * 添加数据库信息
     */
    static addDatabaseManage(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/databaseManage/addDatabaseManage';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['databaseInfoOfProject'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 删除数据库信息
     */
    static deleteDatabaseManage(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/databaseManage/deleteDatabaseManage';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { id: params['id'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 查询所有表
     */
    static selectDataBaseAllTable(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/databaseManage/selectDataBaseAllTable';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { id: params['id'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 查询表的所有字段
     */
    static selectDataBaseAllTableOfFiled(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/databaseManage/selectDataBaseAllTableOfFiled';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { id: params['id'], tableName: params['tableName'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 查询数据库信息分页
     */
    static selectDatabaseManage(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/databaseManage/selectDatabaseManage';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['databaseManageRequest'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 查询数据库信息不分页
     */
    static selectDatabaseManageNotPage(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/databaseManage/selectDatabaseManageNotPage';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['databaseManageCondition'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 更新数据库信息
     */
    static updateDatabaseManage(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/databaseManage/updateDatabaseManage';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['databaseInfoOfProject'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class 项目部署记录Service {
    /**
     * 增加部署记录
     */
    static add(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/deploy/add';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['logAddRequest'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 删除部署记录
     */
    static delete(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/deploy/delete';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { id: params['id'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 查询部署记录列表
     */
    static list(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/deploy/list';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['deployLogListRequest'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 修改部署记录
     */
    static update(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/deploy/update';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['logAddRequest'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 部署文件上传（压缩包）
     */
    static upload(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/deploy/upload';
            const configs = getConfigs('post', 'multipart/form-data', url, options);
            let data = null;
            data = new FormData();
            if (params['file']) {
                if (Object.prototype.toString.call(params['file']) === '[object Array]') {
                    for (const item of params['file']) {
                        data.append('file', item);
                    }
                }
                else {
                    data.append('file', params['file']);
                }
            }
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 查询部署记录
     */
    static deploy(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/deploy/{id}';
            url = url.replace('{id}', params['id'] + '');
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class ExternalApiImplService {
    /**
     * 对外上传文件
     */
    static fileCommit(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/dms/recent/fileCommit';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['request'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 对外查询文件
     */
    static getfile(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/dms/recent/getfile';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['request'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class 文档管理Service {
    /**
     * 预备重命名
     */
    static yurenamefile(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/dms/recovery/Yurenamefile';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { id: params['id'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 复制文件
     */
    static copyfile(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/dms/recovery/copyfile';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['moveFileDto'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 复制文件
     */
    static copyfiles(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/dms/recovery/copyfiles';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['moveFileDto'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 目录的创建
     */
    static create(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/dms/recovery/create';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['createFileDto'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 删除或者恢复
     */
    static del(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/dms/recovery/del';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { classic: params['classic'], id: params['id'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 彻底删除（回收站中）
     */
    static delete(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/dms/recovery/delete';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['request'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 批量删除或者恢复
     */
    static dels(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/dms/recovery/dels';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['request'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 对外上传文件
     */
    static fileUp(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/dms/recovery/fileUp';
            const configs = getConfigs('post', 'multipart/form-data', url, options);
            let data = null;
            data = new FormData();
            if (params['file']) {
                if (Object.prototype.toString.call(params['file']) === '[object Array]') {
                    for (const item of params['file']) {
                        data.append('file', item);
                    }
                }
                else {
                    data.append('file', params['file']);
                }
            }
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 上传文件
     */
    static fileUpload(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/dms/recovery/fileUpload';
            const configs = getConfigs('post', 'multipart/form-data', url, options);
            configs.params = {
                classic: params['classic'],
                filepath: params['filepath'],
                relativePath: params['relativePath']
            };
            let data = null;
            data = new FormData();
            if (params['file']) {
                if (Object.prototype.toString.call(params['file']) === '[object Array]') {
                    for (const item of params['file']) {
                        data.append('file', item);
                    }
                }
                else {
                    data.append('file', params['file']);
                }
            }
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 某个id下
     */
    static floderInfo(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/dms/recovery/floderInfo';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['request'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 收藏或者取消
     */
    static mark(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/dms/recovery/mark';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['request'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 批量收藏或者取消
     */
    static marks(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/dms/recovery/marks';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['request'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 移动文件
     */
    static movefile(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/dms/recovery/movefile';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['moveFileDto'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 预备重命名
     */
    static rYurenamefile(options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/dms/recovery/rYurenamefile';
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 重命名
     */
    static renamefile(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/dms/recovery/renamefile';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['userFile'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 根据文件名,创建时间，文件类型搜索
     */
    static search(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/dms/recovery/search';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['request'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 将文件结构已树形结构返回
     */
    static tree(options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/dms/recovery/tree';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class 邮件设置Service {
    /**
     * 新增邮箱配置
     */
    static addMailConfig(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/email/addMailConfig';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['emailConfig'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 删除邮箱配置
     */
    static delMailConfig(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/email/delMailConfig';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['emailConfig'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 查看邮箱配置
     */
    static getMailConfigById(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/email/getMailConfigById';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['emailConfig'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 根据用户id获取用户邮箱配置
     */
    static getMailConfigByUid(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/email/getMailConfigByUid';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['emailConfig'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 获取邮箱配置列表
     */
    static listMailConfig(options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/email/listMailConfig';
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 修改邮箱配置
     */
    static setMailConfig(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/email/setMailConfig';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['emailConfig'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class 收件箱Service {
    /**
     * 收件箱邮件删除
     */
    static delInbox(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/email/delInbox';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { id: params['id'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 获取本地收件箱列表
     */
    static getInbox(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/email/getInbox';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['emailListRequest'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 查看邮件详情（收件箱）
     */
    static getInboxInfo(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/email/getInboxInfo';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { id: params['id'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 批量标记为已读状态
     */
    static isAllRead(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/email/isAllRead';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['emailInbox'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 标记为未读状态
     */
    static isNotRead(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/email/isNotRead';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['emailInbox'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 标记为已读状态
     */
    static isRead(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/email/isRead';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['emailInbox'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 接收最新邮件
     */
    static receiveMail(options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/email/receiveMail';
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class 发件箱Service {
    /**
     * 发件箱邮件删除
     */
    static delOutbox(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/email/delOutbox';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { id: params['id'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 发送草稿邮件
     */
    static draftMail(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/email/draftMail';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['emailSendRequest'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 获取系统联系人
     */
    static getContactPerson(options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/email/getContactPerson';
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 获取草稿箱列表
     */
    static getDraftList(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/email/getDraftList';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['emailListRequest'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 获取发件箱列表
     */
    static getOutbox(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/email/getOutbox';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['emailListRequest'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 查看邮件详情（发件箱）
     */
    static getOutboxInfo(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/email/getOutboxInfo';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { id: params['id'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 获取发件人
     */
    static getSender(options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/email/getSender';
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 发送邮件
     */
    static sendMail(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/email/sendMail';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['emailSendRequest'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class 垃圾箱Service {
    /**
     * 垃圾箱邮件删除
     */
    static deleteRecycled(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/email/deleteRecycled';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['emailInfoRequest'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 查看垃圾箱邮件详情
     */
    static getDeletedInfo(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/email/getDeletedInfo';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['emailInfoRequest'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 获取垃圾箱邮件列表
     */
    static getDeletedList(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/email/getDeletedList';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['emailListRequest'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class 已收藏Service {
    /**
     * 删除星标邮件
     */
    static deleteStar(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/email/deleteStar';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['emailInfoRequest'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 查看星标邮件详情
     */
    static getStarInfo(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/email/getStarInfo';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['emailInfoRequest'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 获取星标邮件列表
     */
    static getStarList(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/email/getStarList';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['emailListRequest'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 取消邮件收藏（取消星标）
     */
    static reStars(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/email/reStars';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['request'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 收藏邮件（星标邮件）
     */
    static stars(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/email/stars';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['request'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class EnumerationValueMappingApiImplService {
    /**
     * 新增映射的基础信息
     */
    static addDictionaryBasic(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/enumerationValueMapping/addDictionaryBasic';
            const configs = getConfigs('post', 'application/json', url, options);
            configs.params = {
                convertedProjectFlag: params['convertedProjectFlag'],
                createDate: params['createDate'],
                createUserId: params['createUserId'],
                endValue: params['endValue'],
                entityAttributeMappingType: params['entityAttributeMappingType'],
                entityAttributeName: params['entityAttributeName'],
                entityName: params['entityName'],
                id: params['id'],
                sourceDictId: params['sourceDictId'],
                startValue: params['startValue']
            };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 删除映射的基础信息
     */
    static deleteDictionaryBasic(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/enumerationValueMapping/deleteDictionaryBasic';
            const configs = getConfigs('post', 'application/json', url, options);
            configs.params = { id: params['id'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 查询映射的基础信息
     */
    static selectDictionaryBasic(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/enumerationValueMapping/selectDictionaryBasic';
            const configs = getConfigs('post', 'application/json', url, options);
            configs.params = {
                'items.entityName': params['itemsEntityName'],
                'pages.pageCount': params['pagesPageCount'],
                'pages.pageNum': params['pagesPageNum'],
                'pages.total': params['pagesTotal']
            };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 获取需要映射的java对象
     */
    static selectNeedTransformEntity(options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/enumerationValueMapping/selectNeedTransformEntity';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 获取需要映射的java对象的属性
     */
    static selectNeedTransformEntityAttr(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/enumerationValueMapping/selectNeedTransformEntityAttr';
            const configs = getConfigs('post', 'application/json', url, options);
            configs.params = { entityClassString: params['entityClassString'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 更新映射的基础信息
     */
    static updateDictionaryBasic(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/enumerationValueMapping/updateDictionaryBasic';
            const configs = getConfigs('post', 'application/json', url, options);
            configs.params = {
                convertedProjectFlag: params['convertedProjectFlag'],
                createDate: params['createDate'],
                createUserId: params['createUserId'],
                endValue: params['endValue'],
                entityAttributeMappingType: params['entityAttributeMappingType'],
                entityAttributeName: params['entityAttributeName'],
                entityName: params['entityName'],
                id: params['id'],
                sourceDictId: params['sourceDictId'],
                startValue: params['startValue']
            };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class ExcelControllerApiImplService {
    /**
     * 添加Excel模板
     */
    static addAttachment(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/excel/addAttachment';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['excelTemplateVo'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 解析Excel模板的json数据
     */
    static turnUrl(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/excel/turnUrl';
            const configs = getConfigs('post', 'application/json', url, options);
            configs.params = { excelData: params['excelData'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class FuncInfoApiImplService {
    /**
     * 查询某个节点的所有的功能按钮
     */
    static queryFuncForNode(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/flows/funcInfo/queryFuncForNode';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { formId: params['formId'], status: params['status'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 保存业务功能流程
     */
    static saveBusFlows(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/flows/funcInfo/saveBusFlows';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['busFuncParam'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 查询业务功能流程
     */
    static showBusFlows(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/flows/funcInfo/showBusFlows';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { flowBusId: params['flowBusId'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class FuncModuleApiImplService {
    /**
     * 保存业务模块关系
     */
    static saveBusModule(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/flows/module/saveBusModule';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['moduleParam'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 查询业务模块关系
     */
    static showBusModuleList(options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/flows/module/showBusModuleList';
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 查询业务模块关系
     */
    static showBusModuleList1(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/flows/module/showBusModuleList1';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { parentId: params['parentId'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class AdminServiceApiImplService {
    /**
     * 即时通讯通过id获得用户信息
     */
    static exeGetUserById(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/im/auth/exeGetUserById';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['params'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 即时通讯上传附件
     */
    static exeUploadFile(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/im/auth/exeUploadFile';
            const configs = getConfigs('post', 'multipart/form-data', url, options);
            configs.params = { mediaType: params['mediaType'] };
            let data = null;
            data = new FormData();
            if (params['file']) {
                if (Object.prototype.toString.call(params['file']) === '[object Array]') {
                    for (const item of params['file']) {
                        data.append('file', item);
                    }
                }
                else {
                    data.append('file', params['file']);
                }
            }
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 即时通讯获得通讯录
     */
    static getImUserListInfo(options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/im/auth/getImUserListInfo';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 即时通讯拉取远程消息
     */
    static getRemoteMessage(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/im/auth/getRemoteMessage';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['params'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 即时通讯获得群组消息
     */
    static getUserGroupInfo(options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/im/auth/getUserGroupInfo';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 即时通讯获得会话列表
     */
    static pcConservation(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/im/auth/pcConservation';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['params'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 即时通讯刷新阅读时间
     */
    static updateConversationReadTime(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/im/auth/updateConversationReadTime';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['conversation'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class GroupServiceApiImplService {
    /**
     * 即时通讯添加组成员
     */
    static addGroupMembers(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/im/group/addGroupMembers';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['params'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 即时通讯创建组
     */
    static createGroup(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/im/group/createGroup';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['addGroupModel'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 即时通讯批量获得组信息
     */
    static getBatchGroupInfo(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/im/group/getBatchGroupInfo';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['params'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 即时通讯修改组
     */
    static modifyGroupInfo(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/im/group/modifyGroupInfo';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['modifyGroupInfoModel'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class InstrumentManageApiImplService {
    /**
     * 文书添加
     */
    static addInstrument(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/instrument/addInstrument';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['templateParam'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 文书来源管理--添加
     */
    static addSource(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/instrument/addSource';
            const configs = getConfigs('post', 'application/json', url, options);
            configs.params = { sourceName: params['sourceName'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 文书管理--案件文书列表展示
     */
    static caseInstrumentList(options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/instrument/caseInstrumentList';
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 根据表名查询文书绑定的字段
     */
    static fieldSource(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/instrument/fieldSource';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { tableName: params['tableName'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 根据关键字查询表名
     */
    static getAllTable(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/instrument/getAllTable';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { keyWord: params['keyWord'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 查询常量
     */
    static queryConstantList(options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/instrument/queryConstantList';
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 文书来源管理--列表展示
     */
    static sourceList(options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/instrument/sourceList';
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 文书管理--详情展示
     */
    static templateDetail(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/instrument/templateDetail';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { tempId: params['tempId'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 文书管理--列表展示
     */
    static templateList(options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/instrument/templateList';
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 文书结果更新
     */
    static updateInstrumentInfo(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/instrument/updateInstrumentInfo';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['resultParam'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class InterManageApiImplService {
    /**
     * 接口基础信息新增
     */
    static addInterBasic(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/interMange/addInterBasic';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['interfaceBasicInfo'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 接口参数信息新增
     */
    static addInterParas(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/interMange/addInterParas';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['interfaceParasInfo'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 接口基础信息删除
     */
    static deleteInterBasic(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/interMange/deleteInterBasic';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { id: params['id'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 接口参数信息删除
     */
    static deleteInterParas(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/interMange/deleteInterParas';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { id: params['id'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * java数据类型查询
     */
    static getJavaDataType(options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/interMange/getJavaDataType';
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 接口基础信息查询
     */
    static selectInterBasic(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/interMange/selectInterBasic';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['interfaceBasicInfoRequest'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 接口基础信息查询不分页
     */
    static selectInterBasicNotPage(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/interMange/selectInterBasicNotPage';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['interfaceBasicInfoCondition'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 接口基础信息查询自动生成
     */
    static selectInterBasicOfAuto(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/interMange/selectInterBasicOfAuto';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['interfaceBasicInfoRequest'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 接口参数信息查询
     */
    static selectInterParas(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/interMange/selectInterParas';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { interfaceId: params['interfaceId'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 接口参数信息查询自动生成
     */
    static selectInterParasOfAuto(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/interMange/selectInterParasOfAuto';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { interfaceId: params['interfaceId'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 查询sql相关信息
     */
    static selectSqlBasicInfo(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/interMange/selectSqlBasicInfo';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { mapperRelativePath: params['mapperRelativePath'], resultMapId: params['resultMapId'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 接口基础信息更新
     */
    static updateInterBasic(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/interMange/updateInterBasic';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['interfaceBasicInfo'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 接口参数信息更新
     */
    static updateInterParas(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/interMange/updateInterParas';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['interfaceParasInfo'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 更新sql映射列表
     */
    static updateSqlParaInfo(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/interMange/updateSqlParaInfo';
            const configs = getConfigs('post', 'application/json', url, options);
            configs.params = { mapperRelativePath: params['mapperRelativePath'] };
            let data = params['sqlBasicInfo'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class LawsMattersPowerServiceApiImplOfFzjdService {
    /**
     * 获取自由裁量
     */
    static getDiscretion(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/lawsMattersPower/getDiscretion';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { discretionId: params['discretionId'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 获取违法行为
     */
    static getIllegalActs(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/lawsMattersPower/getIllegalActs';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { deptId: params['deptId'], illegalId: params['illegalId'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 获取权力事项列表
     */
    static getMattersPower(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/lawsMattersPower/getMattersPower';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['mattersPowerVo'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 获取权力事项详情
     */
    static getPowerOne(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/lawsMattersPower/getPowerOne';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { deptId: params['deptId'], powerMattersId: params['powerMattersId'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 获取处罚标准
     */
    static getPunishment(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/lawsMattersPower/getPunishment';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { deptId: params['deptId'], punishmentId: params['punishmentId'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 新增自由裁量
     */
    static saveDiscretion(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/lawsMattersPower/saveDiscretion';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['discretionRequest'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 新增违法行为
     */
    static saveIllegalActs(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/lawsMattersPower/saveIllegalActs';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['lawsIllegalActsVo'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 新增权力事项
     */
    static saveMattersPower(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/lawsMattersPower/saveMattersPower';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['lawsMattersPowerEntity'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 新增自由裁量
     */
    static updateDiscretion(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/lawsMattersPower/updateDiscretion';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['lawsDiscretionEntity'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 修改违法行为
     */
    static updateIllegalActs(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/lawsMattersPower/updateIllegalActs';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['lawsIllegalActsVo'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class LawsOriginalServiceApiImplService {
    /**
     * 原文件详情
     */
    static getOriginal(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/lawsOriginal/getOriginal';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { lawId: params['lawId'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 新增法律法规原文件
     */
    static saveLegalOriginal(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/lawsOriginal/saveLegalOriginal';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['lawsContextVo'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class LawsLabelServiceApiImplService {
    /**
     * 删除标签
     */
    static deleteLawsType(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/legalLabel/deleteLawsType';
            const configs = getConfigs('post', 'application/json', url, options);
            configs.params = { id: params['id'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 获取法律法规分类下拉内容
     */
    static getLawsType(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/legalLabel/getLawsType';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { type: params['type'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 获取标签列表
     */
    static getLawsTypeAll(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/legalLabel/getLawsTypeAll';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['map'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 法律法规页面5个分类
     */
    static getLawsTypeList(options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/legalLabel/getLawsTypeList';
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 新增标签
     */
    static saveLawsType(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/legalLabel/saveLawsType';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['map'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class 法律法规Service {
    /**
     * 按所属区域查询
     */
    static getAreaCount(options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/legalRegulations/getAreaCount';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 获取法律法规
     */
    static getLawsList(options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/legalRegulations/getLawsList';
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 法律法规列表
     */
    static getLawsList1(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/legalRegulations/getLawsList';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['map'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 法律法规详情
     */
    static getLawsOne(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/legalRegulations/getLawsOne';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { lawId: params['lawId'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 法规查询
     */
    static getLawsReglationList(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/legalRegulations/getLawsReglationList';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['param'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 按所属区域查询
     */
    static getPublishDateCount(options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/legalRegulations/getPublishDateCount';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 新增法律法规
     */
    static saveLaws(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/legalRegulations/saveLaws';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['lawsRegulationsVo'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 修改法律法规
     */
    static updateLaws(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/legalRegulations/updateLaws';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['lawsRegulationsVo'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class OutTaskRecordApiImplService {
    /**
     * 外部定时记录记录新增
     */
    static addOutTaskRecord(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/outTaskRecord/addOutTaskRecord';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['outTaskRecord'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 外部定时记录记录删除
     */
    static deleteServerManage(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/outTaskRecord/deleteServerManage';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { id: params['id'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 外部定时记录记录查询
     */
    static selectServerManage(options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/outTaskRecord/selectServerManage';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 外部定时记录记录更新
     */
    static updateServerManage(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/outTaskRecord/updateServerManage';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['outTaskRecord'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class ServerManageApiImplService {
    /**
     * 服务信息添加查询
     */
    static addServerManage(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/serverManage/addServerManage';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['serverBasicInfo'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 服务信息添加删除
     */
    static deleteServerManage(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/serverManage/deleteServerManage';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { id: params['id'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 发现服务实例
     */
    static findAllServer(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/serverManage/findAllServer';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { id: params['id'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 获取密码盐和密码长度
     */
    static getPasswordSaltAndLength(options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/serverManage/getPasswordSaltAndLength';
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * ip网络校验
     */
    static pingServer(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/serverManage/pingServer';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { ip: params['ip'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 服务信息添加分页查询
     */
    static selectServerManage(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/serverManage/selectServerManage';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['serverBasicInfoRequest'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 服务信息添加不分页查询
     */
    static selectServerManageNotPage(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/serverManage/selectServerManageNotPage';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['interfaceBasicInfoCondition'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 端口校验吗校验
     */
    static telnetServer(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/serverManage/telnetServer';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { ip: params['ip'], port: params['port'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 服务信息添加更新
     */
    static updateServerManage(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/serverManage/updateServerManage';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['serverBasicInfo'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class SqlAssemblyApiImplService {
    /**
     * sql拼装
     */
    static sqlAssembly(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/sqlAssembly/SqlAssembly';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { taskId: params['taskId'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class TaskApiImplService {
    /**
     * 新增任务
     */
    static add(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/task/add';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['taskInfoVoList'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 任务添加附件
     */
    static addAttachment(options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/task/addAttachment';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 任务文件列表
     */
    static attachmentList(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/task/attachmentList';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['paramMap'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 任务改变状态
     */
    static changeStatus(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/task/changeStatus';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['paramMap'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 任务删除
     */
    static delete(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/task/delete';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['paramMap'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 删除任务附件
     */
    static deleteAttachment(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/task/deleteAttachment';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['filePath'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 编辑任务
     */
    static edit(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/task/edit';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['taskInfoVo'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 编辑任务详情
     */
    static editInfo(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/task/editInfo';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { taskId: params['taskId'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 导出任务详情
     */
    static exportExcel(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/task/exportExcel';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { paramMap: params['paramMap'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 导出任务详情
     */
    static exportExcelNew(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/task/exportExcelNew';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { param: params['param'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 获得子项执行人
     */
    static getChildExecutive(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/task/getChildExecutive';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { taskId: params['taskId'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 获取子项信息
     */
    static getChildInfo(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/task/getChildInfo';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { taskId: params['taskId'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 根据条件获得任务数目
     */
    static getTaskNum(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/task/getTaskNum';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['paramMap'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 任务详情
     */
    static info(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/task/info';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { taskId: params['taskId'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 任务列表
     */
    static list(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/task/list';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['paramMap'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 查询每个人的任务数量
     */
    static queryTaskStatus(options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/task/queryTaskStatus';
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 获得周市摄像点列表
     */
    static list1(options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/task/zs/camera/list';
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 获得周市围栏列表
     */
    static storeList(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/task/zs/camera/storeList';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { cameraId: params['cameraId'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 截图转发
     */
    static communication(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/task/zs/capture/communication';
            const configs = getConfigs('post', 'multipart/form-data', url, options);
            configs.params = { receiver: params['receiver'] };
            let data = null;
            data = new FormData();
            if (params['pic']) {
                if (Object.prototype.toString.call(params['pic']) === '[object Array]') {
                    for (const item of params['pic']) {
                        data.append('pic', item);
                    }
                }
                else {
                    data.append('pic', params['pic']);
                }
            }
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 截图派单
     */
    static distributeOrder(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/task/zs/distributeOrder';
            const configs = getConfigs('post', 'application/json', url, options);
            configs.params = {
                assignTo: params['assignTo'],
                cameraId: params['cameraId'],
                file: params['file'],
                kind: params['kind'],
                remark: params['remark']
            };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 导出周市Excel
     */
    static exportExcel1(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/task/zs/exportExcel';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { param: params['param'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 新增周市围栏
     */
    static add1(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/task/zs/fence/add';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['tbZsFence'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 周市获取任务列表
     */
    static list2(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/task/zs/list';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['paramMap'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 周市手机随手拍
     */
    static snapshot(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/task/zs/snapshot';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['zhoushiListInfo'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 周市门店列表
     */
    static list3(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/task/zs/store/list';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['paramMap'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 更新周市门店
     */
    static updateStoreInfo(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/task/zs/store/updateStoreInfo';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['paramMap'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 更新周市任务数据
     */
    static updateInfo(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/task/zs/updateInfo';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['nzhoushiListInfo'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class TaskClassificationApiImplService {
    /**
     * 任务分类新增
     */
    static add(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/task/classification/add';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['taskClassificationInfoVo'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 任务分类删除
     */
    static delete(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/task/classification/delete';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['paramMap'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 任务分类详情
     */
    static info(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/task/classification/info';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { id: params['id'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 任务分类列表
     */
    static list(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/task/classification/list';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { name: params['name'], userId: params['userId'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 任务分类下拉列表
     */
    static pullDownList(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/task/classification/pullDownList';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { parentId: params['parentId'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class TaskCommentsApiImplService {
    /**
     * 新增任务评论
     */
    static add(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/task/comments/add';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['taskCommentsVo'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class TbTaskExecutiveApiImplService {
    /**
     * 根据分类id获得执行人
     */
    static taskExecutive(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/task/executive/taskExecutive';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { classificationId: params['classificationId'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class TaskTeamApiImplService {
    /**
     * 任务团队新增
     */
    static add(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/task/team/add';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['taskTeamInfoVo'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 任务团队删除
     */
    static delete(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/task/team/delete';
            const configs = getConfigs('post', 'application/json', url, options);
            configs.params = { teamId: params['teamId'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 任务团队详情
     */
    static info(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/task/team/info';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { teamId: params['teamId'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 任务团队列表
     */
    static list(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/task/team/list';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['paramMap'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 任务团队列表（无参）
     */
    static queryMembers(options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/task/team/queryMembers';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export class TaskBindingTableRelationApiImplService {
    /**
     * 任务绑定表映射新增
     */
    static addTaskBindingTableRelation(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/taskBindingTableRelation/addTaskBindingTableRelation';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['taskBindingTableRelationList'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 表字段删除
     */
    static deleteTaskBindingTableRelation(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/taskBindingTableRelation/deleteTaskBindingTableRelation';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { taskId: params['taskId'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 表字段绑定查询
     */
    static selectTaskBindingTableRelation(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/taskBindingTableRelation/selectTaskBindingTableRelation';
            const configs = getConfigs('get', 'application/json', url, options);
            configs.params = { taskId: params['taskId'] };
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * 表字段更新
     */
    static updateTaskBindingTableRelation(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = basePath + '/taskBindingTableRelation/updateTaskBindingTableRelation';
            const configs = getConfigs('post', 'application/json', url, options);
            let data = params['taskBindingTableRelationList'];
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export var EnumPageRequestCode;
(function (EnumPageRequestCode) {
    EnumPageRequestCode["FORM"] = "FORM";
    EnumPageRequestCode["ILLEGAL"] = "ILLEGAL";
    EnumPageRequestCode["REPORT"] = "REPORT";
    EnumPageRequestCode["MODEL"] = "MODEL";
    EnumPageRequestCode["TASK"] = "TASK";
    EnumPageRequestCode["MAIL"] = "MAIL";
    EnumPageRequestCode["CONTRACT"] = "CONTRACT";
    EnumPageRequestCode["Illegal"] = "Illegal";
    EnumPageRequestCode["ZSTASK"] = "ZSTASK";
})(EnumPageRequestCode || (EnumPageRequestCode = {}));
export var EnumUploadRequestCode;
(function (EnumUploadRequestCode) {
    EnumUploadRequestCode["FORM"] = "FORM";
    EnumUploadRequestCode["ILLEGAL"] = "ILLEGAL";
    EnumUploadRequestCode["REPORT"] = "REPORT";
    EnumUploadRequestCode["MODEL"] = "MODEL";
    EnumUploadRequestCode["TASK"] = "TASK";
    EnumUploadRequestCode["MAIL"] = "MAIL";
    EnumUploadRequestCode["CONTRACT"] = "CONTRACT";
    EnumUploadRequestCode["Illegal"] = "Illegal";
    EnumUploadRequestCode["ZSTASK"] = "ZSTASK";
})(EnumUploadRequestCode || (EnumUploadRequestCode = {}));
//# sourceMappingURL=index.js.map