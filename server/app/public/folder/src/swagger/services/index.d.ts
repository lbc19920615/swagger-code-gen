/** Generate by swagger-axios-codegen */
import { IRequestOptions } from './serviceOptions';
export declare const basePath = "/api-system";
export interface IList<T> extends Array<T> {
}
export interface List<T> extends Array<T> {
}
export interface IDictionary<TValue> {
    [key: string]: TValue;
}
export interface Dictionary<TValue> extends IDictionary<TValue> {
}
export interface IListResult<T> {
    items?: T[];
}
export declare class ListResultDto<T> implements IListResult<T> {
    items?: T[];
}
export interface IPagedResult<T> extends IListResult<T> {
    totalCount?: number;
    items?: T[];
}
export declare class PagedResultDto<T> implements IPagedResult<T> {
    totalCount?: number;
    items?: T[];
}
export declare class ProjectManageApiImplService {
    /**
     * 项目管理添加
     */
    static addProjectManage(params?: {
        /** projectInfo */
        projectInfo: ProjectInfo;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 项目管理删除
     */
    static deleteProjectManage(params?: {
        /** id */
        id: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 项目管理查询
     */
    static selectProjectManage(options?: IRequestOptions): Promise<Result>;
    /**
     * 模块查询
     */
    static selectProjectOfModelManage(params?: {
        /** parentId */
        parentId: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 项目管理更新
     */
    static updateProjectManage(params?: {
        /** projectInfo */
        projectInfo: ProjectInfo;
    }, options?: IRequestOptions): Promise<Result>;
}
export declare class TaskBindingAssociationTableRecordApiImplService {
    /**
     * 新增关联表
     */
    static addTaskBindingAssociationTableRecord(params?: {
        /** taskBindingAssociationTableRecordRequest */
        taskBindingAssociationTableRecordRequest: TaskBindingAssociationTableRecordRequest;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 查询关联表
     */
    static selectTaskBindingAssociationTableRecord(params?: {
        /** taskId */
        taskId: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 更新关联表
     */
    static updateTaskBindingAssociationTableRecord(params?: {
        /** taskBindingAssociationTableRecordRequest */
        taskBindingAssociationTableRecordRequest: TaskBindingAssociationTableRecordRequest;
    }, options?: IRequestOptions): Promise<Result>;
}
export declare class TaskBindingConditionRecordTableApiImplService {
    /**
     * 新增条件记录
     */
    static addTaskBindingConditionRecordTable(params?: {
        /** conditionRecordTableList */
        conditionRecordTableList: ConditionRecordTable[];
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 查询条件记录
     */
    static selectTaskBindingConditionRecordTable(params?: {
        /** taskId */
        taskId: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 更新条件记录
     */
    static updateTaskBindingConditionRecordTable(params?: {
        /** conditionRecordTableList */
        conditionRecordTableList: ConditionRecordTable[];
    }, options?: IRequestOptions): Promise<Result>;
}
export declare class DatabaseManageApiImplService {
    /**
     * 添加数据库信息
     */
    static addDatabaseManage(params?: {
        /** databaseInfoOfProject */
        databaseInfoOfProject: DatabaseInfoOfProject;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 删除数据库信息
     */
    static deleteDatabaseManage(params?: {
        /** id */
        id: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 查询所有表
     */
    static selectDataBaseAllTable(params?: {
        /** id */
        id: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 查询表的所有字段
     */
    static selectDataBaseAllTableOfFiled(params?: {
        /** id */
        id: string;
        /** tableName */
        tableName: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 查询数据库信息分页
     */
    static selectDatabaseManage(params?: {
        /** databaseManageRequest */
        databaseManageRequest: DatabaseManageRequest;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 查询数据库信息不分页
     */
    static selectDatabaseManageNotPage(params?: {
        /** databaseManageCondition */
        databaseManageCondition?: DatabaseManageCondition;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 更新数据库信息
     */
    static updateDatabaseManage(params?: {
        /** databaseInfoOfProject */
        databaseInfoOfProject: DatabaseInfoOfProject;
    }, options?: IRequestOptions): Promise<Result>;
}
export declare class 项目部署记录Service {
    /**
     * 增加部署记录
     */
    static add(params?: {
        /** logAddRequest */
        logAddRequest: DeployLogRequest;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 删除部署记录
     */
    static delete(params?: {
        /** id */
        id: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 查询部署记录列表
     */
    static list(params?: {
        /** deployLogListRequest */
        deployLogListRequest: DeployLogListRequest;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 修改部署记录
     */
    static update(params?: {
        /** logAddRequest */
        logAddRequest: DeployLogRequest;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 部署文件上传（压缩包）
     */
    static upload(params?: {
        /** file */
        file?: any;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 查询部署记录
     */
    static deploy(params?: {
        /** id */
        id: string;
    }, options?: IRequestOptions): Promise<Result>;
}
export declare class ExternalApiImplService {
    /**
     * 对外上传文件
     */
    static fileCommit(params?: {
        /** request */
        request: UploadRequest;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 对外查询文件
     */
    static getfile(params?: {
        /** request */
        request: PageRequest;
    }, options?: IRequestOptions): Promise<Result>;
}
export declare class 文档管理Service {
    /**
     * 预备重命名
     */
    static yurenamefile(params?: {
        /** id */
        id: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 复制文件
     */
    static copyfile(params?: {
        /** moveFileDto */
        moveFileDto: MoveFileDTO;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 复制文件
     */
    static copyfiles(params?: {
        /** moveFileDto */
        moveFileDto: MoveFileDTO;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 目录的创建
     */
    static create(params?: {
        /** createFileDto */
        createFileDto: CreateFileDTO;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 删除或者恢复
     */
    static del(params?: {
        /** classic */
        classic: string;
        /** id */
        id: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 彻底删除（回收站中）
     */
    static delete(params?: {
        /** request */
        request: DeleteRequest;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 批量删除或者恢复
     */
    static dels(params?: {
        /** request */
        request: DeleteRequest;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 对外上传文件
     */
    static fileUp(params?: {
        /** file */
        file: any;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 上传文件
     */
    static fileUpload(params?: {
        /** classic */
        classic: string;
        /** file */
        file: any;
        /** filepath */
        filepath: string;
        /** relativePath */
        relativePath: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 某个id下
     */
    static floderInfo(params?: {
        /** request */
        request: PageRequest;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 收藏或者取消
     */
    static mark(params?: {
        /** request */
        request: DeleteRequest;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 批量收藏或者取消
     */
    static marks(params?: {
        /** request */
        request: DeleteRequest;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 移动文件
     */
    static movefile(params?: {
        /** moveFileDto */
        moveFileDto: MoveFileDTO;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 预备重命名
     */
    static rYurenamefile(options?: IRequestOptions): Promise<Result>;
    /**
     * 重命名
     */
    static renamefile(params?: {
        /** userFile */
        userFile: UserFile;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 根据文件名,创建时间，文件类型搜索
     */
    static search(params?: {
        /** request */
        request: SearchRequest;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 将文件结构已树形结构返回
     */
    static tree(options?: IRequestOptions): Promise<Result>;
}
export declare class 邮件设置Service {
    /**
     * 新增邮箱配置
     */
    static addMailConfig(params?: {
        /** emailConfig */
        emailConfig: EmailConfig;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 删除邮箱配置
     */
    static delMailConfig(params?: {
        /** emailConfig */
        emailConfig: EmailConfig;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 查看邮箱配置
     */
    static getMailConfigById(params?: {
        /** emailConfig */
        emailConfig: EmailConfig;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 根据用户id获取用户邮箱配置
     */
    static getMailConfigByUid(params?: {
        /** emailConfig */
        emailConfig: EmailConfig;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 获取邮箱配置列表
     */
    static listMailConfig(options?: IRequestOptions): Promise<Result>;
    /**
     * 修改邮箱配置
     */
    static setMailConfig(params?: {
        /** emailConfig */
        emailConfig: EmailConfig;
    }, options?: IRequestOptions): Promise<Result>;
}
export declare class 收件箱Service {
    /**
     * 收件箱邮件删除
     */
    static delInbox(params?: {
        /** id */
        id?: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 获取本地收件箱列表
     */
    static getInbox(params?: {
        /** emailListRequest */
        emailListRequest: EmailListRequest;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 查看邮件详情（收件箱）
     */
    static getInboxInfo(params?: {
        /** id */
        id: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 批量标记为已读状态
     */
    static isAllRead(params?: {
        /** emailInbox */
        emailInbox: EmailInbox;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 标记为未读状态
     */
    static isNotRead(params?: {
        /** emailInbox */
        emailInbox: EmailInbox;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 标记为已读状态
     */
    static isRead(params?: {
        /** emailInbox */
        emailInbox: EmailInbox;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 接收最新邮件
     */
    static receiveMail(options?: IRequestOptions): Promise<Result>;
}
export declare class 发件箱Service {
    /**
     * 发件箱邮件删除
     */
    static delOutbox(params?: {
        /** id */
        id?: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 发送草稿邮件
     */
    static draftMail(params?: {
        /** emailSendRequest */
        emailSendRequest: EmailSendRequest;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 获取系统联系人
     */
    static getContactPerson(options?: IRequestOptions): Promise<Result>;
    /**
     * 获取草稿箱列表
     */
    static getDraftList(params?: {
        /** emailListRequest */
        emailListRequest: EmailListRequest;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 获取发件箱列表
     */
    static getOutbox(params?: {
        /** emailListRequest */
        emailListRequest: EmailListRequest;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 查看邮件详情（发件箱）
     */
    static getOutboxInfo(params?: {
        /** id */
        id: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 获取发件人
     */
    static getSender(options?: IRequestOptions): Promise<Result>;
    /**
     * 发送邮件
     */
    static sendMail(params?: {
        /** emailSendRequest */
        emailSendRequest: EmailSendRequest;
    }, options?: IRequestOptions): Promise<Result>;
}
export declare class 垃圾箱Service {
    /**
     * 垃圾箱邮件删除
     */
    static deleteRecycled(params?: {
        /** emailInfoRequest */
        emailInfoRequest: EmailInfoRequest;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 查看垃圾箱邮件详情
     */
    static getDeletedInfo(params?: {
        /** emailInfoRequest */
        emailInfoRequest: EmailInfoRequest;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 获取垃圾箱邮件列表
     */
    static getDeletedList(params?: {
        /** emailListRequest */
        emailListRequest: EmailListRequest;
    }, options?: IRequestOptions): Promise<Result>;
}
export declare class 已收藏Service {
    /**
     * 删除星标邮件
     */
    static deleteStar(params?: {
        /** emailInfoRequest */
        emailInfoRequest: EmailInfoRequest;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 查看星标邮件详情
     */
    static getStarInfo(params?: {
        /** emailInfoRequest */
        emailInfoRequest: EmailInfoRequest;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 获取星标邮件列表
     */
    static getStarList(params?: {
        /** emailListRequest */
        emailListRequest: EmailListRequest;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 取消邮件收藏（取消星标）
     */
    static reStars(params?: {
        /** request */
        request: EmailInfoRequest;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 收藏邮件（星标邮件）
     */
    static stars(params?: {
        /** request */
        request: EmailInfoRequest;
    }, options?: IRequestOptions): Promise<Result>;
}
export declare class EnumerationValueMappingApiImplService {
    /**
     * 新增映射的基础信息
     */
    static addDictionaryBasic(params?: {
        /**  */
        convertedProjectFlag?: string;
        /**  */
        createDate?: string;
        /**  */
        createUserId?: string;
        /**  */
        endValue?: number;
        /**  */
        entityAttributeMappingType?: number;
        /**  */
        entityAttributeName?: string;
        /**  */
        entityName?: string;
        /**  */
        id?: number;
        /**  */
        sourceDictId?: string;
        /**  */
        startValue?: number;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 删除映射的基础信息
     */
    static deleteDictionaryBasic(params?: {
        /** id */
        id?: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 查询映射的基础信息
     */
    static selectDictionaryBasic(params?: {
        /**  */
        itemsEntityName?: string;
        /**  */
        pagesPageCount?: number;
        /**  */
        pagesPageNum?: number;
        /**  */
        pagesTotal?: number;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 获取需要映射的java对象
     */
    static selectNeedTransformEntity(options?: IRequestOptions): Promise<Result>;
    /**
     * 获取需要映射的java对象的属性
     */
    static selectNeedTransformEntityAttr(params?: {
        /** entityClassString */
        entityClassString?: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 更新映射的基础信息
     */
    static updateDictionaryBasic(params?: {
        /**  */
        convertedProjectFlag?: string;
        /**  */
        createDate?: string;
        /**  */
        createUserId?: string;
        /**  */
        endValue?: number;
        /**  */
        entityAttributeMappingType?: number;
        /**  */
        entityAttributeName?: string;
        /**  */
        entityName?: string;
        /**  */
        id?: number;
        /**  */
        sourceDictId?: string;
        /**  */
        startValue?: number;
    }, options?: IRequestOptions): Promise<Result>;
}
export declare class ExcelControllerApiImplService {
    /**
     * 添加Excel模板
     */
    static addAttachment(params?: {
        /** excelTemplateVo */
        excelTemplateVo: ExcelTemplateVo;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 解析Excel模板的json数据
     */
    static turnUrl(params?: {
        /** excelData */
        excelData: string;
    }, options?: IRequestOptions): Promise<Result>;
}
export declare class FuncInfoApiImplService {
    /**
     * 查询某个节点的所有的功能按钮
     */
    static queryFuncForNode(params?: {
        /** formId */
        formId: string;
        /** status */
        status: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 保存业务功能流程
     */
    static saveBusFlows(params?: {
        /** busFuncParam */
        busFuncParam: BusFuncParam;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 查询业务功能流程
     */
    static showBusFlows(params?: {
        /** flowBusId */
        flowBusId: string;
    }, options?: IRequestOptions): Promise<Result>;
}
export declare class FuncModuleApiImplService {
    /**
     * 保存业务模块关系
     */
    static saveBusModule(params?: {
        /** moduleParam */
        moduleParam: ModuleParam;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 查询业务模块关系
     */
    static showBusModuleList(options?: IRequestOptions): Promise<Result>;
    /**
     * 查询业务模块关系
     */
    static showBusModuleList1(params?: {
        /** parentId */
        parentId: string;
    }, options?: IRequestOptions): Promise<Result>;
}
export declare class AdminServiceApiImplService {
    /**
     * 即时通讯通过id获得用户信息
     */
    static exeGetUserById(params?: {
        /** params */
        params: object;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 即时通讯上传附件
     */
    static exeUploadFile(params?: {
        /** file */
        file: any;
        /** mediaType */
        mediaType?: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 即时通讯获得通讯录
     */
    static getImUserListInfo(options?: IRequestOptions): Promise<Result>;
    /**
     * 即时通讯拉取远程消息
     */
    static getRemoteMessage(params?: {
        /** params */
        params: object;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 即时通讯获得群组消息
     */
    static getUserGroupInfo(options?: IRequestOptions): Promise<Result>;
    /**
     * 即时通讯获得会话列表
     */
    static pcConservation(params?: {
        /** params */
        params: object;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 即时通讯刷新阅读时间
     */
    static updateConversationReadTime(params?: {
        /** conversation */
        conversation: Conversation;
    }, options?: IRequestOptions): Promise<Result>;
}
export declare class GroupServiceApiImplService {
    /**
     * 即时通讯添加组成员
     */
    static addGroupMembers(params?: {
        /** params */
        params: object;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 即时通讯创建组
     */
    static createGroup(params?: {
        /** addGroupModel */
        addGroupModel: AddGroupModel;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 即时通讯批量获得组信息
     */
    static getBatchGroupInfo(params?: {
        /** params */
        params: object;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 即时通讯修改组
     */
    static modifyGroupInfo(params?: {
        /** modifyGroupInfoModel */
        modifyGroupInfoModel: ModifyGroupInfoModel;
    }, options?: IRequestOptions): Promise<Result>;
}
export declare class InstrumentManageApiImplService {
    /**
     * 文书添加
     */
    static addInstrument(params?: {
        /** templateParam */
        templateParam: InstrumentTemplateParam;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 文书来源管理--添加
     */
    static addSource(params?: {
        /** sourceName */
        sourceName: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 文书管理--案件文书列表展示
     */
    static caseInstrumentList(options?: IRequestOptions): Promise<Result>;
    /**
     * 根据表名查询文书绑定的字段
     */
    static fieldSource(params?: {
        /** tableName */
        tableName: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 根据关键字查询表名
     */
    static getAllTable(params?: {
        /** keyWord */
        keyWord: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 查询常量
     */
    static queryConstantList(options?: IRequestOptions): Promise<Result>;
    /**
     * 文书来源管理--列表展示
     */
    static sourceList(options?: IRequestOptions): Promise<Result>;
    /**
     * 文书管理--详情展示
     */
    static templateDetail(params?: {
        /** tempId */
        tempId: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 文书管理--列表展示
     */
    static templateList(options?: IRequestOptions): Promise<Result>;
    /**
     * 文书结果更新
     */
    static updateInstrumentInfo(params?: {
        /** resultParam */
        resultParam: InstrumentResultParam;
    }, options?: IRequestOptions): Promise<Result>;
}
export declare class InterManageApiImplService {
    /**
     * 接口基础信息新增
     */
    static addInterBasic(params?: {
        /** interfaceBasicInfo */
        interfaceBasicInfo: InterfaceBasicInfo;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 接口参数信息新增
     */
    static addInterParas(params?: {
        /** interfaceParasInfo */
        interfaceParasInfo: InterfaceParasInfo;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 接口基础信息删除
     */
    static deleteInterBasic(params?: {
        /** id */
        id: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 接口参数信息删除
     */
    static deleteInterParas(params?: {
        /** id */
        id: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * java数据类型查询
     */
    static getJavaDataType(options?: IRequestOptions): Promise<Result>;
    /**
     * 接口基础信息查询
     */
    static selectInterBasic(params?: {
        /** interfaceBasicInfoRequest */
        interfaceBasicInfoRequest: InterfaceBasicInfoRequest;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 接口基础信息查询不分页
     */
    static selectInterBasicNotPage(params?: {
        /** interfaceBasicInfoCondition */
        interfaceBasicInfoCondition: InterfaceBasicInfoCondition;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 接口基础信息查询自动生成
     */
    static selectInterBasicOfAuto(params?: {
        /** interfaceBasicInfoRequest */
        interfaceBasicInfoRequest: InterfaceBasicInfoRequest;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 接口参数信息查询
     */
    static selectInterParas(params?: {
        /** interfaceId */
        interfaceId: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 接口参数信息查询自动生成
     */
    static selectInterParasOfAuto(params?: {
        /** interfaceId */
        interfaceId: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 查询sql相关信息
     */
    static selectSqlBasicInfo(params?: {
        /** mapperRelativePath */
        mapperRelativePath: string;
        /** resultMapId */
        resultMapId: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 接口基础信息更新
     */
    static updateInterBasic(params?: {
        /** interfaceBasicInfo */
        interfaceBasicInfo: InterfaceBasicInfo;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 接口参数信息更新
     */
    static updateInterParas(params?: {
        /** interfaceParasInfo */
        interfaceParasInfo: InterfaceParasInfo;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 更新sql映射列表
     */
    static updateSqlParaInfo(params?: {
        /** mapperRelativePath */
        mapperRelativePath: string;
        /** sqlBasicInfo */
        sqlBasicInfo: SqlBasicInfo;
    }, options?: IRequestOptions): Promise<Result>;
}
export declare class LawsMattersPowerServiceApiImplOfFzjdService {
    /**
     * 获取自由裁量
     */
    static getDiscretion(params?: {
        /** discretionId */
        discretionId: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 获取违法行为
     */
    static getIllegalActs(params?: {
        /** deptId */
        deptId: string;
        /** illegalId */
        illegalId: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 获取权力事项列表
     */
    static getMattersPower(params?: {
        /** mattersPowerVO */
        mattersPowerVo: MattersPowerVO;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 获取权力事项详情
     */
    static getPowerOne(params?: {
        /** deptId */
        deptId: string;
        /** powerMattersId */
        powerMattersId: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 获取处罚标准
     */
    static getPunishment(params?: {
        /** deptId */
        deptId: string;
        /** punishmentId */
        punishmentId: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 新增自由裁量
     */
    static saveDiscretion(params?: {
        /** discretionRequest */
        discretionRequest: DiscretionRequest;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 新增违法行为
     */
    static saveIllegalActs(params?: {
        /** lawsIllegalActsVO */
        lawsIllegalActsVo: LawsIllegalActsVO;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 新增权力事项
     */
    static saveMattersPower(params?: {
        /** lawsMattersPowerEntity */
        lawsMattersPowerEntity: LawsMattersPowerEntity;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 新增自由裁量
     */
    static updateDiscretion(params?: {
        /** lawsDiscretionEntity */
        lawsDiscretionEntity: LawsDiscretionEntity;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 修改违法行为
     */
    static updateIllegalActs(params?: {
        /** lawsIllegalActsVO */
        lawsIllegalActsVo: LawsIllegalActsVO;
    }, options?: IRequestOptions): Promise<Result>;
}
export declare class LawsOriginalServiceApiImplService {
    /**
     * 原文件详情
     */
    static getOriginal(params?: {
        /** lawId */
        lawId: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 新增法律法规原文件
     */
    static saveLegalOriginal(params?: {
        /** lawsContextVO */
        lawsContextVo: LawsContextVO;
    }, options?: IRequestOptions): Promise<Result>;
}
export declare class LawsLabelServiceApiImplService {
    /**
     * 删除标签
     */
    static deleteLawsType(params?: {
        /** id */
        id: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 获取法律法规分类下拉内容
     */
    static getLawsType(params?: {
        /** type */
        type: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 获取标签列表
     */
    static getLawsTypeAll(params?: {
        /** map */
        map: object;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 法律法规页面5个分类
     */
    static getLawsTypeList(options?: IRequestOptions): Promise<Result>;
    /**
     * 新增标签
     */
    static saveLawsType(params?: {
        /** map */
        map: object;
    }, options?: IRequestOptions): Promise<Result>;
}
export declare class 法律法规Service {
    /**
     * 按所属区域查询
     */
    static getAreaCount(options?: IRequestOptions): Promise<Result>;
    /**
     * 获取法律法规
     */
    static getLawsList(options?: IRequestOptions): Promise<Result>;
    /**
     * 法律法规列表
     */
    static getLawsList1(params?: {
        /** map */
        map: object;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 法律法规详情
     */
    static getLawsOne(params?: {
        /** lawId */
        lawId: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 法规查询
     */
    static getLawsReglationList(params?: {
        /** param */
        param: object;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 按所属区域查询
     */
    static getPublishDateCount(options?: IRequestOptions): Promise<Result>;
    /**
     * 新增法律法规
     */
    static saveLaws(params?: {
        /** lawsRegulationsVO */
        lawsRegulationsVo: LawsRegulationsVO;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 修改法律法规
     */
    static updateLaws(params?: {
        /** lawsRegulationsVO */
        lawsRegulationsVo: LawsRegulationsVO;
    }, options?: IRequestOptions): Promise<Result>;
}
export declare class OutTaskRecordApiImplService {
    /**
     * 外部定时记录记录新增
     */
    static addOutTaskRecord(params?: {
        /** outTaskRecord */
        outTaskRecord: OutTaskRecord;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 外部定时记录记录删除
     */
    static deleteServerManage(params?: {
        /** id */
        id: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 外部定时记录记录查询
     */
    static selectServerManage(options?: IRequestOptions): Promise<Result>;
    /**
     * 外部定时记录记录更新
     */
    static updateServerManage(params?: {
        /** outTaskRecord */
        outTaskRecord: OutTaskRecord;
    }, options?: IRequestOptions): Promise<Result>;
}
export declare class ServerManageApiImplService {
    /**
     * 服务信息添加查询
     */
    static addServerManage(params?: {
        /** serverBasicInfo */
        serverBasicInfo: ServerBasicInfo;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 服务信息添加删除
     */
    static deleteServerManage(params?: {
        /** id */
        id: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 发现服务实例
     */
    static findAllServer(params?: {
        /** id */
        id?: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 获取密码盐和密码长度
     */
    static getPasswordSaltAndLength(options?: IRequestOptions): Promise<Result>;
    /**
     * ip网络校验
     */
    static pingServer(params?: {
        /** ip */
        ip: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 服务信息添加分页查询
     */
    static selectServerManage(params?: {
        /** serverBasicInfoRequest */
        serverBasicInfoRequest: ServerBasicInfoRequest;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 服务信息添加不分页查询
     */
    static selectServerManageNotPage(params?: {
        /** interfaceBasicInfoCondition */
        interfaceBasicInfoCondition: ServerBasicInfoCondition;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 端口校验吗校验
     */
    static telnetServer(params?: {
        /** ip */
        ip: string;
        /** port */
        port: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 服务信息添加更新
     */
    static updateServerManage(params?: {
        /** serverBasicInfo */
        serverBasicInfo: ServerBasicInfo;
    }, options?: IRequestOptions): Promise<Result>;
}
export declare class SqlAssemblyApiImplService {
    /**
     * sql拼装
     */
    static sqlAssembly(params?: {
        /** taskId */
        taskId: string;
    }, options?: IRequestOptions): Promise<Result>;
}
export declare class TaskApiImplService {
    /**
     * 新增任务
     */
    static add(params?: {
        /** taskInfoVoList */
        taskInfoVoList: TaskInfoVo[];
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 任务添加附件
     */
    static addAttachment(options?: IRequestOptions): Promise<Result>;
    /**
     * 任务文件列表
     */
    static attachmentList(params?: {
        /** paramMap */
        paramMap: object;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 任务改变状态
     */
    static changeStatus(params?: {
        /** paramMap */
        paramMap: object;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 任务删除
     */
    static delete(params?: {
        /** paramMap */
        paramMap: object;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 删除任务附件
     */
    static deleteAttachment(params?: {
        /** filePath */
        filePath: any | null[];
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 编辑任务
     */
    static edit(params?: {
        /** taskInfoVo */
        taskInfoVo: TaskInfoVo;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 编辑任务详情
     */
    static editInfo(params?: {
        /** taskId */
        taskId?: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 导出任务详情
     */
    static exportExcel(params?: {
        /** paramMap */
        paramMap: object;
    }, options?: IRequestOptions): Promise<any>;
    /**
     * 导出任务详情
     */
    static exportExcelNew(params?: {
        /** param */
        param: object;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 获得子项执行人
     */
    static getChildExecutive(params?: {
        /** taskId */
        taskId?: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 获取子项信息
     */
    static getChildInfo(params?: {
        /** taskId */
        taskId?: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 根据条件获得任务数目
     */
    static getTaskNum(params?: {
        /** paramMap */
        paramMap: object;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 任务详情
     */
    static info(params?: {
        /** taskId */
        taskId?: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 任务列表
     */
    static list(params?: {
        /** paramMap */
        paramMap: object;
    }, options?: IRequestOptions): Promise<Result_IPage_TbTask>;
    /**
     * 查询每个人的任务数量
     */
    static queryTaskStatus(options?: IRequestOptions): Promise<Result>;
    /**
     * 获得周市摄像点列表
     */
    static list1(options?: IRequestOptions): Promise<Result>;
    /**
     * 获得周市围栏列表
     */
    static storeList(params?: {
        /** cameraId */
        cameraId?: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 截图转发
     */
    static communication(params?: {
        /** pic */
        pic: any;
        /** receiver */
        receiver: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 截图派单
     */
    static distributeOrder(params?: {
        /**  */
        assignTo?: string;
        /**  */
        cameraId?: string;
        /**  */
        file?: any;
        /**  */
        kind?: string;
        /**  */
        remark?: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 导出周市Excel
     */
    static exportExcel1(params?: {
        /** param */
        param: object;
    }, options?: IRequestOptions): Promise<any>;
    /**
     * 新增周市围栏
     */
    static add1(params?: {
        /** tbZsFence */
        tbZsFence: TbZsFence;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 周市获取任务列表
     */
    static list2(params?: {
        /** paramMap */
        paramMap: object;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 周市手机随手拍
     */
    static snapshot(params?: {
        /** zhoushiListInfo */
        zhoushiListInfo: zhoushiListInfo;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 周市门店列表
     */
    static list3(params?: {
        /** paramMap */
        paramMap: object;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 更新周市门店
     */
    static updateStoreInfo(params?: {
        /** paramMap */
        paramMap: object;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 更新周市任务数据
     */
    static updateInfo(params?: {
        /** nzhoushiListInfo */
        nzhoushiListInfo: zhoushiListInfo;
    }, options?: IRequestOptions): Promise<Result>;
}
export declare class TaskClassificationApiImplService {
    /**
     * 任务分类新增
     */
    static add(params?: {
        /** taskClassificationInfoVo */
        taskClassificationInfoVo: TaskClassificationInfoVo;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 任务分类删除
     */
    static delete(params?: {
        /** paramMap */
        paramMap: object;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 任务分类详情
     */
    static info(params?: {
        /** id */
        id?: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 任务分类列表
     */
    static list(params?: {
        /** name */
        name?: string;
        /** userId */
        userId?: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 任务分类下拉列表
     */
    static pullDownList(params?: {
        /** parentId */
        parentId?: string;
    }, options?: IRequestOptions): Promise<Result>;
}
export declare class TaskCommentsApiImplService {
    /**
     * 新增任务评论
     */
    static add(params?: {
        /** taskCommentsVo */
        taskCommentsVo: TaskCommentsVo;
    }, options?: IRequestOptions): Promise<Result>;
}
export declare class TbTaskExecutiveApiImplService {
    /**
     * 根据分类id获得执行人
     */
    static taskExecutive(params?: {
        /** classificationId */
        classificationId?: string;
    }, options?: IRequestOptions): Promise<Result>;
}
export declare class TaskTeamApiImplService {
    /**
     * 任务团队新增
     */
    static add(params?: {
        /** taskTeamInfoVo */
        taskTeamInfoVo: TaskTeamInfoVo;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 任务团队删除
     */
    static delete(params?: {
        /** teamId */
        teamId?: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 任务团队详情
     */
    static info(params?: {
        /** teamId */
        teamId?: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 任务团队列表
     */
    static list(params?: {
        /** paramMap */
        paramMap: object;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 任务团队列表（无参）
     */
    static queryMembers(options?: IRequestOptions): Promise<Result>;
}
export declare class TaskBindingTableRelationApiImplService {
    /**
     * 任务绑定表映射新增
     */
    static addTaskBindingTableRelation(params?: {
        /** taskBindingTableRelationList */
        taskBindingTableRelationList: TaskBindingTableRelation[];
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 表字段删除
     */
    static deleteTaskBindingTableRelation(params?: {
        /** taskId */
        taskId: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 表字段绑定查询
     */
    static selectTaskBindingTableRelation(params?: {
        /** taskId */
        taskId: string;
    }, options?: IRequestOptions): Promise<Result>;
    /**
     * 表字段更新
     */
    static updateTaskBindingTableRelation(params?: {
        /** taskBindingTableRelationList */
        taskBindingTableRelationList: TaskBindingTableRelation[];
    }, options?: IRequestOptions): Promise<Result>;
}
export interface AddGroupModel {
    /**  */
    groupInfo?: PojoGroupInfo;
    /**  */
    members?: PojoGroupMember[];
}
export interface AssociationTableRecord {
    /** 0否1是关联表 */
    associationFlag?: number;
    /** 关联表 */
    associationTableName?: string;
    /**  */
    createDate?: Date;
    /**  */
    createUserId?: string;
    /**  */
    id?: string;
    /** 字段 */
    leftTableCloum?: string;
    /** 关联表1 */
    leftTableName?: string;
    /** 字段 */
    rightTableCloum?: string;
    /** 关联表1 */
    rightTableName?: string;
    /** 任务id */
    taskId?: number;
}
export interface AttachmentInfo {
    /**  */
    content?: string;
    /**  */
    fileType?: string;
    /**  */
    name?: string;
}
export interface AttachmentResponse {
    /**  */
    filename?: string;
    /**  */
    url?: string;
}
export interface BusFuncParam {
    /**  */
    busFuncJson?: string;
    /**  */
    directorMaxLevel?: number;
    /**  */
    flowBusId?: string;
    /**  */
    nodeConfig?: NodeConfigParam;
    /**  */
    workFlowVersionId?: string;
}
export interface ConditionRecordTable {
    /** 条件表达式  */
    conditionalExpression?: string;
    /**  */
    createDate?: Date;
    /**  */
    createUserId?: string;
    /** 0无1左括号2右括号 */
    firstBracketType?: number;
    /**  */
    id?: string;
    /** 1and 2or  */
    relatedExpressions?: number;
    /** 0无1左括号2右括号  */
    secondBracketType?: number;
    /** 序号  */
    sort?: number;
    /** 表字段 */
    tableCoulm?: string;
    /** 表名 */
    tableName?: string;
    /** 任务id */
    taskId?: number;
    /** 传参时可以用#{}  */
    value?: string;
    /** 1固定值2函数方法3sql语句4传参  */
    valueType?: number;
}
export interface Conversation {
    /**  */
    line?: number;
    /**  */
    readTimeStamp?: number;
    /**  */
    target?: string;
    /**  */
    type?: number;
    /**  */
    unReadCount?: number;
}
export interface CreateFileDTO {
    /**  */
    classic?: string;
    /**  */
    description?: string;
    /**  */
    fileName?: string;
    /**  */
    filePath?: string;
}
export interface DatabaseInfoOfProject {
    /** 数据库连接名 */
    databaseConnectName?: string;
    /** 数据库用户名 */
    databasePassword?: string;
    /** 数据库类型：1.mysql2.sqlserver3.orcale */
    databaseType?: number;
    /** 数据库地址 */
    databaseUrl?: string;
    /** 数据库用户名 */
    databaseUsername?: string;
    /**  */
    id?: number;
    /** 项目id */
    projectId?: string;
    /** 项目负责人 */
    projectLeader?: string;
    /** 项目负责人联系方式 */
    projectLeaderPhone?: string;
    /** 项目名称 */
    projectName?: string;
}
export interface DatabaseManageCondition {
    /**  */
    projectId?: string;
}
export interface DatabaseManageRequest {
    /**  */
    items?: DatabaseManageCondition;
    /**  */
    pages?: PageProperties;
}
export interface DeleteRequest {
    /**  */
    classic?: string;
    /**  */
    classics?: string[];
    /**  */
    id?: string;
    /**  */
    ids?: string[];
    /**  */
    userFileId?: string;
}
export interface DeployLogListRequest {
    /**  */
    endTime?: Date;
    /**  */
    limit?: number;
    /**  */
    name?: string;
    /**  */
    page?: number;
    /**  */
    startTime?: Date;
}
export interface DeployLogRequest {
    /** 部署记录 */
    description?: string;
    /** 记录id */
    id?: string;
    /** 项目名称 */
    name?: string;
    /** 项目压缩包地址 */
    url?: string;
    /** 版本号 */
    version?: string;
}
export interface DiscretionRequest {
    /**  */
    deptId?: string;
    /**  */
    lawsDiscretionEntity?: LawsDiscretionEntity[];
}
export interface EmailConfig {
    /**  */
    createTime?: Date;
    /**  */
    deleted?: number;
    /**  */
    email?: string;
    /**  */
    enable?: number;
    /**  */
    id?: number;
    /**  */
    nickname?: string;
    /**  */
    password?: string;
    /**  */
    port?: string;
    /**  */
    serverPop?: string;
    /**  */
    serverStmp?: string;
    /**  */
    uid?: string;
    /**  */
    updateTime?: Date;
    /**  */
    username?: string;
}
export interface EmailInbox {
    /**  */
    attached?: number;
    /**  */
    attachmentId?: string;
    /**  */
    attachmentslist?: AttachmentResponse[];
    /**  */
    content?: string;
    /**  */
    emailBcc?: string;
    /**  */
    emailCc?: string;
    /**  */
    emailTo?: string;
    /**  */
    id?: string;
    /**  */
    inside?: number;
    /**  */
    isMark?: number;
    /**  */
    isRead?: number;
    /**  */
    receiveTime?: Date;
    /**  */
    sender?: string;
    /**  */
    sendtime?: Date;
    /**  */
    source?: string;
    /**  */
    subject?: string;
    /**  */
    uid?: string;
}
export interface EmailInfoRequest {
    /** 邮件id */
    id?: string;
    /**  */
    ismark?: number;
    /** 邮件来源 0发件箱 1收件箱 */
    source?: number;
}
export interface EmailListRequest {
    /**  */
    endTime?: Date;
    /**  */
    limit?: number;
    /**  */
    page?: number;
    /**  */
    startTime?: Date;
    /**  */
    subject?: string;
    /**  */
    uid?: string;
}
export interface EmailSendRequest {
    /**  */
    attached?: number;
    /**  */
    attachmentId?: string;
    /**  */
    bcc?: string[];
    /**  */
    cc?: string[];
    /**  */
    content?: string;
    /**  */
    draft?: number;
    /**  */
    file?: AttachmentInfo[];
    /**  */
    fileInfo?: object;
    /**  */
    id?: string;
    /**  */
    sender?: string;
    /**  */
    subject?: string;
    /**  */
    to?: string[];
    /**  */
    urls?: string[];
}
export interface ExcelTemplateVo {
    /**  */
    excelData?: string;
    /**  */
    parameterVo?: ParameterVo[];
    /**  */
    relationVo?: RelationVo[];
    /**  */
    templateVo?: TemplateVo;
}
export interface FuncAuthorityParam {
    /**  */
    authorityRange?: string;
    /**  */
    isRw?: string;
    /**  */
    userId?: string;
    /**  */
    visible?: string;
}
export interface FuncInfoNodeParam {
    /**  */
    api?: string;
    /**  */
    approveFlow?: string;
    /**  */
    formId?: string;
    /**  */
    funcAuthorityList?: FuncAuthorityParam[];
    /**  */
    funcName?: string;
    /**  */
    funcParamList?: FuncParamParam[];
    /**  */
    funcRuleList?: FuncRuleParam[];
    /**  */
    level?: string;
    /**  */
    nextStatus?: string;
    /**  */
    rout?: string;
    /**  */
    routType?: string;
    /**  */
    status?: string;
    /**  */
    statusCn?: string;
    /**  */
    subFuncInfoNodeList?: SubFuncInfoNodeParam[];
}
export interface FuncParamParam {
    /**  */
    paramName?: string;
    /**  */
    paramType?: string;
}
export interface FuncRuleParam {
    /**  */
    param?: string;
    /**  */
    paramCondition?: string;
    /**  */
    paramRelation?: string;
    /**  */
    paramTypes?: string;
    /**  */
    rule?: string;
    /**  */
    ruleName?: string;
}
export interface IPage_TbTask {
    /**  */
    current?: number;
    /**  */
    pages?: number;
    /**  */
    records?: TbTask[];
    /**  */
    searchCount?: boolean;
    /**  */
    size?: number;
    /**  */
    total?: number;
}
export interface InstrumentResultParam {
    /**  */
    businessId?: string;
    /**  */
    resultVal?: string;
    /**  */
    tempId?: string;
}
export interface InstrumentTemplateFieldParam {
    /**  */
    businessField?: string;
    /**  */
    placeholder?: string;
    /**  */
    tableName?: string;
    /**  */
    type?: string;
}
export interface InstrumentTemplateParam {
    /**  */
    busFlowId?: string;
    /**  */
    busNodeId?: string;
    /**  */
    busNodeName?: string;
    /**  */
    desc?: string;
    /**  */
    method?: string;
    /**  */
    param?: string;
    /**  */
    routing?: string;
    /**  */
    sourceId?: string;
    /**  */
    sqlStatement?: string;
    /**  */
    tempFile?: string;
    /**  */
    tempFileName?: string;
    /**  */
    tempId?: string;
    /**  */
    tempName?: string;
    /**  */
    tempVal?: string;
    /**  */
    templateFieldParamList?: InstrumentTemplateFieldParam[];
    /**  */
    type?: string;
}
export interface InterfaceBasicInfo {
    /**  */
    createDate?: Date;
    /**  */
    createUserId?: string;
    /**  */
    functionName?: string;
    /**  */
    id?: string;
    /**  */
    inParasType?: string;
    /**  */
    interfaceAddress?: string;
    /**  */
    interfaceAllUrl?: string;
    /**  */
    interfaceCharset?: string;
    /**  */
    interfaceContentType?: string;
    /**  */
    interfaceIp?: string;
    /**  */
    interfaceIsThirdParty?: string;
    /**  */
    interfaceName?: string;
    /**  */
    interfacePort?: string;
    /**  */
    interfaceRemark?: string;
    /**  */
    interfaceRequestType?: string;
    /**  */
    moduleName?: string;
    /**  */
    outParasType?: string;
}
export interface InterfaceBasicInfoCondition {
    /**  */
    functionName?: string;
    /**  */
    interfaceUrl?: string;
    /**  */
    moduleName?: string;
}
export interface InterfaceBasicInfoRequest {
    /**  */
    items?: InterfaceBasicInfoCondition;
    /**  */
    pages?: PageProperties;
}
export interface InterfaceParasInfo {
    /**  */
    classCode?: string;
    /**  */
    code?: string;
    /**  */
    createTime?: Date;
    /**  */
    createUserId?: string;
    /**  */
    dataType?: number;
    /**  */
    id?: string;
    /**  */
    interfaceId?: string;
    /**  */
    interfaceParasInfoList?: InterfaceParasInfo[];
    /**  */
    paramsValue?: object;
    /**  */
    parasWays?: number;
    /**  */
    parentId?: string;
    /**  */
    sourceParaName?: string;
    /**  */
    sourceParaType?: string;
    /**  */
    targetParaName?: string;
    /**  */
    targetParaType?: string;
}
export interface LawsContextVO {
    /**  */
    flfgId?: string;
    /**  */
    isUpdate?: string;
    /**  */
    list?: LawsOriginalContextVO[];
}
export interface LawsDiscretionEntity {
    /**  */
    content?: string;
    /**  */
    deptId?: string;
    /**  */
    id?: string;
    /**  */
    isDiscretion?: string;
    /**  */
    isNumber?: string;
    /**  */
    lowerLimit?: string;
    /**  */
    orderNo?: number;
    /**  */
    originalDocumentId?: string;
    /**  */
    upperLimit?: string;
}
export interface LawsIllegalActsResquest {
    /**  */
    id?: string;
    /**  */
    legalLiabilityId?: string;
    /**  */
    legalLiabilityName?: string;
    /**  */
    managementBasisId?: string;
    /**  */
    managementBasisName?: string;
    /**  */
    name?: string;
    /**  */
    number?: string;
    /**  */
    penaltyStandardsId?: string;
    /**  */
    penaltyStandardsName?: string;
}
export interface LawsIllegalActsVO {
    /**  */
    deptId?: string;
    /**  */
    mattersId?: string;
    /**  */
    resquestList?: LawsIllegalActsResquest[];
}
export interface LawsMattersPowerEntity {
    /**  */
    className?: string;
    /**  */
    classNo?: string;
    /**  */
    deptId?: string;
    /**  */
    field?: string;
    /**  */
    fifgId?: string;
    /**  */
    id?: string;
    /**  */
    isDelete?: string;
    /**  */
    isOneclickApproval?: number;
    /**  */
    orderNo?: number;
    /**  */
    powerCode?: string;
    /**  */
    powerMattersName?: string;
    /**  */
    rightCode?: string;
}
export interface LawsOriginalContextVO {
    /**  */
    content?: string;
    /**  */
    description?: string;
    /**  */
    list?: LawsOriginalContextVO[];
    /**  */
    serialNumber?: string;
    /**  */
    title?: string;
    /**  */
    type?: string;
}
export interface LawsRegulationsVO {
    /**  */
    id?: string;
    /**  */
    implementationTime?: Date;
    /**  */
    industryType?: string;
    /**  */
    lawsRegulationsModifyDate?: Date;
    /**  */
    lawsRegulationsName?: string;
    /**  */
    lawsRegulationsNo?: string;
    /**  */
    lawsRegulationsType?: string;
    /**  */
    operateDate?: Date;
    /**  */
    originalFile?: string;
    /**  */
    publishDate?: Date;
    /**  */
    status?: string;
    /**  */
    throughMeet?: string;
    /**  */
    usingRange?: string;
}
export interface MattersPowerVO {
    /**  */
    deptId?: string;
    /**  */
    isBind?: string;
    /**  */
    limit?: number;
    /**  */
    page?: number;
    /**  */
    powerCode?: string;
    /**  */
    powerMattersName?: string;
}
export interface ModifyGroupInfoModel {
    /**  */
    group_id?: string;
    /**  */
    new_owner?: string;
    /**  */
    operator?: string;
    /**  */
    to_lines?: number[];
    /**  */
    type?: number;
    /**  */
    value?: object;
}
export interface ModuleParam {
    /**  */
    deptId?: string;
    /**  */
    deptName?: string;
    /**  */
    moduleId?: string;
    /**  */
    moduleName?: string;
}
export interface MoveFileDTO {
    /**  */
    classic?: string;
    /**  */
    extendName?: string;
    /**  */
    fileName?: string;
    /**  */
    filePath?: string;
    /**  */
    newId?: string;
    /**  */
    oldFilePath?: string;
    /**  */
    oldId?: string;
    /**  */
    oldIds?: string[];
}
export interface NodeConfigParam {
    /**  */
    childNode?: NodeConfigParam;
    /**  */
    conditionNodes?: NodeConfigParam[];
    /**  */
    nodeName?: string;
    /**  */
    ruleForm?: FuncInfoNodeParam;
    /**  */
    type?: number;
}
export interface OutTaskRecord {
    /**  */
    createTime?: Date;
    /**  */
    createUserId?: string;
    /** 数据来源地区 */
    dataSourceArea?: string;
    /** 数据来源系统 */
    dataSourceSystem?: string;
    /**  */
    id?: number;
    /**  */
    mainTable?: string;
    /**  */
    moudleId?: string;
    /**  */
    projectId?: string;
    /**  */
    taskExecutionFrequency?: string;
    /**  */
    taskName?: string;
}
export interface PageProperties {
    /**  */
    pageCount?: number;
    /**  */
    pageNum?: number;
    /**  */
    total?: number;
}
export interface PageRequest {
    /**  */
    authority?: string;
    /**  */
    classic?: string;
    /**  */
    classicName?: string;
    /**  */
    code?: EnumPageRequestCode;
    /**  */
    filePath?: string;
    /**  */
    fromId?: string;
    /**  */
    hhx?: string;
    /**  */
    limit?: number;
    /**  */
    page?: number;
    /**  */
    password?: string;
    /**  */
    type?: string;
    /**  */
    userFileId?: string;
    /**  */
    zlf?: string;
    /**  */
    zyy?: string;
}
export interface ParameterVo {
    /**  */
    api?: string;
    /**  */
    parameterName?: string;
    /**  */
    parameterValue?: string;
    /**  */
    ptype?: string;
}
export interface PojoGroupInfo {
    /**  */
    extra?: string;
    /**  */
    history_message?: number;
    /**  */
    join_type?: number;
    /**  */
    max_member_count?: number;
    /**  */
    member_count?: number;
    /**  */
    mute?: number;
    /**  */
    name?: string;
    /**  */
    owner?: string;
    /**  */
    portrait?: string;
    /**  */
    private_chat?: number;
    /**  */
    searchable?: number;
    /**  */
    target_id?: string;
    /**  */
    type?: number;
}
export interface PojoGroupMember {
    /**  */
    alias?: string;
    /**  */
    member_id?: string;
    /**  */
    type?: number;
}
export interface ProjectInfo {
    /**  */
    createDate?: Date;
    /**  */
    createUserId?: string;
    /**  */
    id?: string;
    /** 模块名 */
    moudleName?: string;
    /**  */
    parentId?: string;
    /**  */
    projectInfoList?: ProjectInfo[];
    /** 项目负责人 */
    projectLeader?: string;
    /** 项目负责人联系方式 */
    projectLeaderPhone?: string;
    /** 项目名称 */
    projectName?: string;
}
export interface RelationVo {
    /**  */
    attributes?: number;
    /**  */
    attributesName?: string;
    /**  */
    dataSourceId?: string;
    /**  */
    dataSourceIp?: string;
    /**  */
    dataSourceName?: string;
    /**  */
    description?: string;
    /**  */
    fixedValue?: string;
    /**  */
    startCols?: number;
    /**  */
    startRow?: number;
    /**  */
    type?: number;
    /**  */
    variableName?: string;
}
export interface Result {
    /**  */
    code?: number;
    /**  */
    data?: object;
    /**  */
    msg?: string;
    /**  */
    status?: number;
    /**  */
    type?: string;
}
export interface ResultAttr {
    /**  */
    id?: string;
    /**  */
    resultColumnRelationPropertyList?: ResultColumnRelationProperty[];
    /**  */
    type?: string;
}
export interface ResultColumnRelationProperty {
    /**  */
    column?: string;
    /**  */
    primaryKey?: number;
    /**  */
    property?: string;
    /**  */
    resultMap?: string;
}
export interface Result_IPage_TbTask {
    /**  */
    code?: number;
    /**  */
    data?: IPage_TbTask;
    /**  */
    msg?: string;
    /**  */
    status?: number;
    /**  */
    type?: string;
}
export interface SearchRequest {
    /**  */
    begin?: string;
    /**  */
    end?: string;
    /**  */
    extend?: string;
    /**  */
    fileName?: string;
    /**  */
    filePath?: string;
    /**  */
    isDir?: string;
    /**  */
    maxSize?: number;
    /**  */
    minSize?: number;
    /**  */
    userId?: string;
}
export interface ServerBasicInfo {
    /** 所属项目 */
    belongToProject?: string;
    /**  */
    createDate?: Date;
    /**  */
    createUserId?: string;
    /**  */
    id?: number;
    /** 主服务的（getway）端口 */
    mainServerPort?: string;
    /** 项目id */
    projectId?: string;
    /** 项目负责人 */
    projectLeader?: string;
    /** 负责人手机号 */
    projectLeaderPhone?: string;
    /** 服务器链接地址 */
    serverConnectIp?: string;
    /** 服务器连接名 */
    serverConnectName?: string;
    /** 服务器连接密码 */
    serverConnectPassword?: string;
    /** 服务器链接端口 */
    serverConnectPort?: string;
    /** 服务器连接用户名 */
    serverConnectUserName?: string;
    /** 服务器版本 */
    serverVersion?: number;
}
export interface ServerBasicInfoCondition {
    /**  */
    projectId?: string;
}
export interface ServerBasicInfoRequest {
    /**  */
    items?: ServerBasicInfoCondition;
    /**  */
    pages?: PageProperties;
}
export interface SqlAttr {
    /**  */
    id?: string;
    /**  */
    resultMap?: string;
    /**  */
    sqlContent?: string;
}
export interface SqlBasicInfo {
    /**  */
    childResultAttrList?: ResultAttr[];
    /**  */
    resultAttr?: ResultAttr;
    /**  */
    sqlAttr?: SqlAttr;
}
export interface SubFuncInfoNodeParam {
    /**  */
    api?: string;
    /**  */
    approveFlow?: string;
    /**  */
    funcAuthorityList?: FuncAuthorityParam[];
    /**  */
    funcName?: string;
    /**  */
    funcParamList?: FuncParamParam[];
    /**  */
    funcRuleList?: FuncRuleParam[];
    /**  */
    level?: string;
    /**  */
    nextStatus?: string;
    /**  */
    rout?: string;
    /**  */
    routType?: string;
    /**  */
    status?: string;
    /**  */
    statusCn?: string;
}
export interface TaskAttachmentVo {
    /**  */
    file?: string;
    /**  */
    id?: string;
    /**  */
    name?: string;
    /**  */
    order?: number;
    /**  */
    size?: string;
    /**  */
    type?: number;
}
export interface TaskBindingAssociationTableRecordRequest {
    /**  */
    associationTableRecordList?: AssociationTableRecord[];
    /**  */
    mainTable?: string;
    /**  */
    taskId?: string;
}
export interface TaskBindingTableRelation {
    /** 创建日期 */
    createDate?: Date;
    /** 创建人 */
    createUserId?: string;
    /** 数据库id */
    databaseId?: number;
    /** 字段名 */
    filedName?: string;
    /** 字段类型 */
    filedType?: string;
    /** 来源数据库id */
    fromDatabaseId?: number;
    /** 来源字段 */
    fromFiledName?: string;
    /** 来源字段类型 */
    fromFiledType?: string;
    /** 来源表名 */
    fromTableName?: string;
    /**  */
    id?: number;
    /** 表名 */
    tableName?: string;
    /** 任务id */
    taskId?: number;
}
export interface TaskClassificationInfoVo {
    /**  */
    description?: string;
    /**  */
    executiveIds?: string;
    /**  */
    id?: string;
    /**  */
    order?: number;
    /**  */
    parentId?: string;
    /**  */
    title?: string;
}
export interface TaskCommentsVo {
    /**  */
    content?: string;
    /**  */
    taskId?: string;
}
export interface TaskInfoVo {
    /**  */
    attachments?: TaskAttachmentVo[];
    /**  */
    code?: string;
    /**  */
    deadline?: Date;
    /**  */
    description?: string;
    /**  */
    exeEditType?: number;
    /**  */
    executiveIds?: string;
    /**  */
    id?: string;
    /**  */
    level?: string;
    /**  */
    name?: string;
    /**  */
    parentId?: string;
    /**  */
    priority?: number;
    /**  */
    status?: number;
    /**  */
    tip?: string;
}
export interface TaskTeamInfoVo {
    /**  */
    childSourceId?: string;
    /**  */
    id?: string;
    /**  */
    name?: string;
    /**  */
    sourceId?: string;
    /**  */
    teamMemberIds?: string;
}
export interface TbTask {
    /**  */
    code?: string;
    /**  */
    createDate?: Date;
    /**  */
    createUserId?: string;
    /**  */
    deadline?: Date;
    /**  */
    deptId?: string;
    /**  */
    description?: string;
    /**  */
    id?: string;
    /**  */
    level?: string;
    /**  */
    modifyDate?: Date;
    /**  */
    modifyUserId?: string;
    /**  */
    name?: string;
    /**  */
    parentId?: string;
    /**  */
    priority?: number;
    /**  */
    startTime?: Date;
    /**  */
    status?: number;
    /**  */
    tip?: string;
    /**  */
    torder?: number;
}
export interface TbZsFence {
    /**  */
    cameraId?: string;
    /**  */
    fenceId?: string;
    /**  */
    id?: number;
}
export interface TemplateVo {
    /**  */
    cols?: number;
    /**  */
    label?: string;
    /**  */
    rows?: number;
    /**  */
    templateName?: string;
    /**  */
    templateUrl?: string;
    /**  */
    type?: string;
    /**  */
    typeX?: string;
    /**  */
    typeY?: string;
}
export interface UploadRequest {
    /**  */
    code?: EnumUploadRequestCode;
    /**  */
    fileId?: string;
    /**  */
    filePath?: string;
    /**  */
    fromId?: string;
    /**  */
    rootPath?: string;
    /**  */
    task?: string;
    /**  */
    url?: string[];
}
export interface UserFile {
    /**  */
    authority?: string;
    /**  */
    auths?: number[];
    /**  */
    canReName?: string;
    /**  */
    children?: UserFile[];
    /**  */
    className?: string;
    /**  */
    classic?: string;
    /**  */
    deleteBatchNum?: string;
    /**  */
    deleteFlag?: number;
    /**  */
    deleteTime?: string;
    /**  */
    description?: string;
    /**  */
    extendName?: string;
    /**  */
    fatherId?: string;
    /**  */
    fileId?: string;
    /**  */
    fileName?: string;
    /**  */
    filePath?: string;
    /**  */
    fileSize?: number;
    /**  */
    fileUrl?: string;
    /**  */
    filefromId?: string;
    /**  */
    fromClassic?: string;
    /**  */
    fromClassics?: string[];
    /**  */
    ids?: string[];
    /**  */
    isDelete?: string;
    /**  */
    isDir?: number;
    /**  */
    isFix?: string;
    /**  */
    isFrist?: string;
    /**  */
    isLoad?: string;
    /**  */
    isMark?: number;
    /**  */
    isRead?: string;
    /**  */
    isWatch?: string;
    /**  */
    islock?: string;
    /**  */
    locker?: string;
    /**  */
    modifier?: string;
    /**  */
    oldFileName?: string;
    /**  */
    showAuth?: string[];
    /**  */
    treeid?: string;
    /**  */
    type?: string;
    /**  */
    updateTime?: Date;
    /**  */
    uploadTime?: Date;
    /**  */
    userFileId?: string;
    /**  */
    userId?: string;
    /**  */
    userName?: string;
}
export interface zhoushiListInfo {
    /**  */
    accountName?: string;
    /**  */
    assignTo?: string;
    /**  */
    assignToName?: string;
    /**  */
    assignToTime?: Date;
    /**  */
    cameraId?: string;
    /**  */
    cameraName?: string;
    /**  */
    carNum?: string;
    /**  */
    createDate?: Date;
    /**  */
    createUserId?: string;
    /**  */
    disposeDesc?: string;
    /**  */
    disposeOperate?: string;
    /**  */
    disposeOperateName?: string;
    /**  */
    disposePicture?: string;
    /**  */
    disposeTime?: Date;
    /**  */
    dpName?: string;
    /**  */
    dpNum?: string;
    /**  */
    duration?: number;
    /**  */
    eventId?: string;
    /**  */
    id?: number;
    /**  */
    kind?: string;
    /**  */
    kindValue?: string;
    /**  */
    lat?: number;
    /**  */
    lng?: number;
    /**  */
    locationAttr?: number;
    /**  */
    modifyDate?: Date;
    /**  */
    modifyUserId?: string;
    /**  */
    msgId?: number;
    /**  */
    orgId?: number;
    /**  */
    orgName?: string;
    /**  */
    picture?: string;
    /**  */
    pictures?: string;
    /**  */
    pusher?: string;
    /**  */
    rect?: string;
    /**  */
    remark?: string;
    /**  */
    score?: number;
    /**  */
    startTime?: Date;
    /**  */
    status?: string;
    /**  */
    statusValue?: string;
    /**  */
    taskcode?: string;
    /**  */
    type?: number;
    /**  */
    updateIp?: string;
    /**  */
    updateOperator?: string;
    /**  */
    updateOperatorName?: string;
    /**  */
    updateTime?: Date;
}
export declare enum EnumPageRequestCode {
    'FORM' = "FORM",
    'ILLEGAL' = "ILLEGAL",
    'REPORT' = "REPORT",
    'MODEL' = "MODEL",
    'TASK' = "TASK",
    'MAIL' = "MAIL",
    'CONTRACT' = "CONTRACT",
    'Illegal' = "Illegal",
    'ZSTASK' = "ZSTASK"
}
export declare enum EnumUploadRequestCode {
    'FORM' = "FORM",
    'ILLEGAL' = "ILLEGAL",
    'REPORT' = "REPORT",
    'MODEL' = "MODEL",
    'TASK' = "TASK",
    'MAIL' = "MAIL",
    'CONTRACT' = "CONTRACT",
    'Illegal' = "Illegal",
    'ZSTASK' = "ZSTASK"
}
