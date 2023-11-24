import { IsString, IsNumber, IsOptional, Length, Min } from 'class-validator';

export class CreateMenuItemDto {
    @IsString()
    @Length(2, 50)
    name!: string;

    @IsString()
    @Length(3, 300)
    description!: string;


    @IsNumber()
    @Min(0)
    price!: number;

    @IsNumber()
    @Min(1)
    categoryId!: number;


    @IsString()
    @IsOptional()
    imageUrl?: string;
}


export class UpdateMenuItemDto {
    @IsString()
    @Length(2, 50)
    @IsOptional()
    name?: string;

    @IsString()
    @Length(3, 300)
    @IsOptional()
    description?: string;

    @IsNumber()
    @Min(0)
    @IsOptional()
    price?: number;

    @IsNumber()
    @IsOptional()
    categoryId?: number;

    @IsString()
    @IsOptional()
    imageUrl?: string;
}
